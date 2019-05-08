'use strict';

const fs = require('fs');

let raw = fs.readFileSync('recky/reviews.json');

const reviews = JSON.parse(raw);

// Change all document ids to integers
let id = 1;
for(let i = 0; i < reviews.length; i++) {
	const review = reviews[i];
	review._id = id;
	id++;
}

raw = fs.readFileSync('recky/countries.json');
let countries = JSON.parse(raw);

raw = fs.readFileSync('recky/regions.json');
const regions = JSON.parse(raw);

raw = fs.readFileSync('recky/varieties.json');
const varieties = JSON.parse(raw);

// Map country, region and variety to an integer and maps Integer back to corresponding value
const countryToInt = new Map();
const regionToInt = new Map();
const varietyToInt =  new Map();

// Map each country to some integer value
for (let i = 0; i <= countries.length; i++) {
	countryToInt.set(countries[i], (i + 1));
	countryToInt.set((i + 1), countries[i]);
}

// Map regions
for (let i = 0; i <= regions.length; i++) {
	regionToInt.set(regions[i], (i + 1));
	regionToInt.set((i + 1),regions[i]);
}

// Map varieties
for (let i = 0; i <= varieties.length; i++) {
	varietyToInt.set(varieties[i], (i + 1));
	varietyToInt.set((i + 1), varieties[i]);
}

const records = new Array();
const set_records = new Set(); // used to keep track of what country, region, variety and price tuples have already been added.

let rec_count = 0;
// Collapse reviews into smaller subset of "wines"
for (let i = 0; i < reviews.length; i++) {
    const country =  reviews[i].country;
    const region = reviews[i].region_1;
    const variety = reviews[i].variety;
    const price = reviews[i].price;

    if (!(set_records.has(`${country} ${region} ${variety} ${price}`))) {
        const rec = reviews[i];
        
        rec.id = ++rec_count;
        records.push(reviews[i]);
        set_records.add(`${country} ${region} ${variety} ${price}`);
    }
}

// easy way to make deep copy of a json object
const records_copy = JSON.parse(JSON.stringify(records)); 

// replace country, region and variety strings with corresponding int mapping
for (let i = 0; i < records_copy.length; i++) {
    const rec = records_copy[i];
    rec.country = countryToInt.get(rec.country);
    rec.region_1 = regionToInt.get(rec.region_1);
    rec.variety = varietyToInt.get(rec.variety);
}

// take only the country, region, variety and price from each record
const records_for_similarity =  new Array();
for (let i = 0; i < records_copy.length; i++) {
    const rec = records_copy[i];
    records_for_similarity.push([rec.country, rec.region_1, rec.variety, rec.price]);
}

for (let i = 0; i < 10; i++) {
    // console.log(records_copy[i]);
}

for (let i = 0; i < 10; i++) {
    // console.log(records_for_similarity[i]);
}

const json = JSON.stringify(records_for_similarity);

// read resulting similarity matrix computed by python script
raw = fs.readFileSync('recky/temp.json');
const data = JSON.parse(raw);

// maps each row of similarity matrix to column with hightest similarity
const most_similiar = new Map();
for (let i = 0; i < data.length; i++) {
	let index = 0;
	let largest_sim = -1;

	for (let j = 0; j < data[i].length; j++) {
		let sim = data[i][j];
		if (sim != 1 && sim > largest_sim) {
			index = j;
			largest_sim = data[i][j];
		}
	}

	most_similiar.set((i + 1), index);
}

const findTop3Sim = (i) => {
	let index = -1;
	let first = -1;
	let first_ind = -1;
	let second = -1;
	let second_ind = -1;
	let third = -1;
	let third_ind = -1;

	for (let j = 0; j < data[i].length; j++) {
		let sim = data[i][j];
		if (sim != 1 && sim > first) {
			let temp = first;
			let temp_ind = first_ind;
			first_ind = j;
			first = data[i][j];

			third = second;
			third_ind = second_ind;

			second =  temp;
			second_ind = temp_ind;
		}
		else if (sim != 1 && sim > second) {
			let temp = second;
			let temp_ind = second_ind;
			second_ind = j;
			second = data[i][j];
			third = temp;
			third_ind = temp_ind;
		}
		else if (sim != 1 && sim > second) {
			third_ind = j;
			third = data[i][j]
		}
	}

	return [first_ind+1, second_ind+1, third_ind+1];
}

let tstMap = new Map();
for (let i = 0; i < data.length; i++) {
	const three_most_sim = findTop3Sim(i);
	tstMap.set((i+1), three_most_sim);

}

const findMatchingReviews = (country, region, variety, price) => {
	let matches = [];
	for (let i = 0; i < reviews.length; i++) {
		const rev = reviews[i];
		const c = rev.country;
		const r = rev.region_1;
		const v = rev.variety;
		const p = rev.price;

		if (c === country && r === region && v === variety && p === price) {
			matches.push(rev);
		}
	}

	return matches;
}

const findAllMatches = () => {
	let res = []
	let max = 0;
	let id = -1;
	for (let i = 0; i < 1000; i++) {
		const rec = records[i];
		const matches = findMatchingReviews(rec.country, rec.region_1, rec.variety, rec.price);
		const num = matches.length;
		if (num > max) {
			max = num;
			id = rec.id;
		}

		const obj = { id: rec.id, matches: matches, count: matches.length };
		res.push(obj);
	}
	return res;
}

// maps an index from similarity table to all reviews with matching attributes
const reviews_matching = findAllMatches();

// returns highest rated wine from list of reviews
const findHighestRated = (reviews) => {
	let highest_rating = -1;
	let index = -1;

	for (let i = 0; i < reviews.length; i++) {
		const rev =  reviews[i];
		if (rev.points > highest_rating) {
			highest_rating = rev.points;
			index = i;
		}
	}
	return (reviews[index]);
}

const findReviewsWithId = (id) => {
	for (let i = 0; i < reviews_matching.length; i++) {
		const rev = reviews_matching[i];
		if (rev.id === id) {
			if (rev.matches.length < 3) {
				return rev.matches;
			}

			const highest_rated = findHighestRated(rev.matches);
			rev.matches[0] = highest_rated;

			return rev.matches.slice(0,3);
		}
	}
}

const find = (id) => {
	for (let i = 0; i < reviews_matching.length; i++) {
		const rev = reviews_matching[i];
		if (rev.id === id) {
			return rev.matches;
		}
	}
}

const getHighestRatedForMostSim = (map) => {
	for (let i = 1; i <= most_similiar.size; i++) {
		const most_sim = tstMap.get(i); // gets index that is most similar to current index

		let top_3 = []
		for (let j = 0; j < most_sim.length; j++) {
			const index = most_sim[j];
			const revs_with_id = find(index);
			const highest_rated = findHighestRated(revs_with_id);
			top_3.push(highest_rated);
		}

		map.set(i, top_3);
	}
	return map;
}

let m = getHighestRatedForMostSim(new Map());
let reviews_copy = JSON.parse(JSON.stringify(reviews));

const copy_reviews_matching = JSON.parse(JSON.stringify(reviews_matching));

// Goes through all reviews and embeds the three reviews for most similiar wines 
const insertMostSimiliarToAllReviews = () => {
	for (let i = 0; i < copy_reviews_matching.length; i++) {
		const rev = copy_reviews_matching[i];
		const revs = rev.matches;

		const sim_revs_to_insert = m.get(rev.id);
		for (let j = 0; j < revs.length; j++) {
			const doc =  revs[j];
			doc.similar_wines = sim_revs_to_insert;
		}
	}
}

insertMostSimiliarToAllReviews();

// remove any auxilary info used for preprocessing
// and keep only data relevant to a review
let final_reviews = [];
for (let i = 0; i < copy_reviews_matching.length; i++) {
	const current =  copy_reviews_matching[i];

	final_reviews = final_reviews.concat(current.matches);
}

const collection = JSON.stringify(final_reviews);

// write resulting set of reviews to file
fs.writeFile('recky/final_collection_2.json', collection, 'utf8', (err) => {
    if(err) {
	  console.log(err);
	  return;
	}
    console.log("JSON saved to "+ 'recky/final_collection2.json');
});
