// 1.found website with ordered list of short horror stories
    // https://bestlifeonline.com/two-sentence-horror-stories/

// 2. need to find a way to link the list to our site

//3. need to find a way to return as an .
//can you make an ordered list into an array?

//4. neeed to find a way to randomize the "li" that is shown on the site
//function randomScaryStory(arr){
//     var x = Math.floor(Math.random()*arr.length);
//     return arr[x];
//      arr[x]
// }

import { createClient } from 'pexels';

const client = createClient('563492ad6f917000010000015d41ebdb4943491d917958c769ce2068');
const query = 'Nature';

client.videoes.search({ query, per_page: 1 }).then(videos => {...});
