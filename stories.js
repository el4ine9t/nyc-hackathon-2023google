let studentStoryText = document.querySelector(".studentStory")

let sahriarButton = document.querySelector(".Story1")
// let sahriarStory = document.querySelector(".Sahriar")
  
let elaineButton = document.querySelector(".Story2")
// let elaineStory = document.querySelector(".Student")

let yamiButton = document.querySelector(".Story3")
// let YamiStory = document.querySelector(".Student2")

let chriesamnaButton = document.querySelector(".Story4")
// let YamiStory = document.querySelector(".Student2")

let shahrinButton = document.querySelector(".Story5")




sahriarButton.onclick =  function(){
    studentStoryText.innerHTML = `<p>Growing up, my parents worked hard to provide for our family. My mother was a cashier and my father was a delivery man, and together they did their best to make ends meet. However, due to financial constraints, we had to share a one-bedroom apartment in a crowded neighborhood with my two older sisters. Living in such close quarters was difficult, and I often felt overwhelmed by the cramped living conditions. </p>
  
  <p>  Despite working long hours, my mother also took on the role of caretaker and homemaker, cooking, cleaning, and taking care of us until late at night. However, the stress of their work schedules took a toll on me, and at six years old, I became mute for the next two years of my life.</p>
  
  
<p> To make matters worse, our rent was increased from 1.1K to 1.7K per month, and we were forced to move to Brownsville, a neighborhood known for its high crime rates. This meant leaving behind our predominantly South Asian Muslim community in Jackson Heights and entering a predominantly Black Christian neighborhood.
Although this move presented new challenges, it also had its positive aspects. </p>
  
  <p> For example, I became the first Asian graduate from my high school, which was predominantly made up of Black and Hispanic students. However, this experience also made me realize how much my access to my own culture and identity had been limited.</p>
  
<p> It's crucial to provide affordable housing for all New Yorkers, particularly for immigrants who have helped to build this city. Affordable housing should not just be a place to live, but a place to call home, where people can feel comfortable and connected to their community and culture.</p>`;
// sahriarStory.style.display = "block" 
// studentStory.style.display = "none" 
}

elaineButton.onclick =  function(){
  studentStoryText.innerHTML = `<p>Being raised by a single parent with four children, my mom worked 12-hour shifts, including weekends, just to keep a roof over our heads and pay the bills. My mom spent 8 years applying for public housing but we didn’t get it until one day, our apartment caught on fire. We spent 2 nights at a hotel and 2 years at a shelter in Brownsville.</p>
  
  <p>After getting public housing, although our rent now is much cheaper, our building is pretty much falling apart. The elevators are down every other week, our water gets shut off often, and there have been floods from leaks. Affordable housing is so important in order to provide a safe and secure place for families to live in but they should be maintained properly. Achieving a good quality of life should include homes in good condition at a fair price level.</p>
`;
// sahriarStory.style.display = "none" 
// studentStory.style.display = "block" 
}

yamiButton.onclick =  function(){
  studentStoryText.innerHTML = ` <p> Growing up in NYC was a struggle for my family. Living in a 2-bedroom apartment with 4 household members was especially challenging.</p>

<p>Until the age 10, I had to share a bedroom with my mother and brother sleeping on a queen-sized bed that despite being big wasn’t the most comfortable. My sister got her own room and I used to cry and pray that I would also have my own room, one where I could have privacy and comfort.</p>

<p> My mother understood my pain as she too wished for her own space. When my brother was born in 2007, she seeked and applied for affordable housing while picking up shifts to support us. It wasn't until 2020 that we moved into a 3 bedroom apartment.</p>

<p>
This privilege that my family was able to get has absolutely changed my life for the better as I’m able to have friends over and have the privacy I craved at 10 years old. This is why affordable and quick housing is absolutely crucial. Individuals shouldn’t have to struggle to live in a home where all members of their family have their own space and comfort. </p> `;

// sahriarStory.style.display = "none" 
// YamiStory.style.display = "block" 
}

chriesamnaButton.onclick =  function(){
  studentStoryText.innerHTML = `
<p>My father immigrated to New York from the Dominican Republic on a scholarship in pursuit of higher education. To establish roots for my mother and me in a new country, he worked endlessly. So much so that I have limited memories of my own father growing up.</p>

<p>
Shortly after my mother and I became settled in our new one-bedroom apartment in Manhattan, we had to start searching for a new home. When my sister was born, our living arrangement shifted again. Her crib was placed in my parents' already cramped bedroom, and I slept on a convertible couch-bed in our tiny living room. The steep rent weighed heavily on us, and we had to decide between staying in a "better neighborhood" or moving to one we could actually afford. </p>

<p> When we first arrived in The Bronx, it was regarded as a dangerous place, let alone a suitable place to raise a family. This idea only began to shift when new developments appeared in our area, increasing the value of our borough and rebranding it as an "up-and-coming" area. While this change may seem positive on the surface, it raises the question of who truly benefits. When our property values increase, so do our rents leaving many locals struggling to stay afloat. 
</p>
 `;}

shahrinButton.onclick =  function(){
  studentStoryText.innerHTML = `
<p>I’m a child of two parents who come from a long line of people affected by the Bangladeshi diaspora. With the terrors my grandparents have faced and the expectations that were soon translated into generational trauma for my parents, my parents immigrated to America with hopes to start a new life—an easier life. But much to their dismay, a new struggle would come to torment them and the next generation—myself and my sister.</p>

<p>Finances have been an issue a great number of people within my community have struggled with. As of right now, I am embarrassed to say that my current place of residence is not up to par to any living standards. Just a few months ago we had been running on portable electric stoves for a whole year due to a gas leak that occurred in my building. These issues only continue to compile into “the reasons why we should move out” list my sister and I had made. However, there’s no hope.</p> 

<p>Regardless of the government programs established to help the housing issues, the requirements such as having a certain income margin in order to live in specific buildings, the lottery system that doesn’t prioritize those in need, and the reputations on the communities in which the housing arrangements are made, if anything, keep us from moving out.</p>
 `;}