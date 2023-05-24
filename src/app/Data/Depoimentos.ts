import { Depoimento } from "../models/Depoimento";

export class Depoimentos{
    depoimentosArray : Array<Depoimento> = [
        
        {
            name: 'John Pimenta',
            age: null,
            city: null,
            rate: 5,
            comment: ' "Great quality products, always meet expectations, the shirts arrive smelling good and the products are very well packaged. Thank you for the beautiful work you do!" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Almendra Farfan',
            age: null,
            city: null,
            rate: 4,
            comment: ' "I had a problem with the shirt I bought. Upon calling them, I was promply helped and my issue was quickly solved. Amazing customer service and product quality" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Jennifer B',
            age: null,
            city: null,
            rate: 5,
            comment: ' "My son has become increasingly interested in the planets and space. He was SO pumped when he revived this shirt. Great colors and clear graphic! Soft enough and durable. Not super thin. No complaints." ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Verna',
            age: null,
            city: null,
            rate: 5,
            comment: ' "I love the moon poster that I bought. I have a bunch of posters in my store and this is the best image quality by far in comparison to the others" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Tresa M',
            age: null,
            city: null,
            rate: 5,
            comment: ' "The colors of the t-shirts are breathtaking. I often get compliments on the design, and it doesn’t appear to have faded yet after at least 10 washes" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Tom',
            age: null,
            city: null,
            rate: 5,
            comment: ' "5 stars for design, fit and great quality" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Renee Simmons',
            age: null,
            city: null,
            rate: 5,
            comment: ' "The hat was perfect, I liked that the patch quality. I Had the Hat within 2 days of ordering it. I would definitely order from them again." ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Abe Lincoln',
            age: null,
            city: null,
            rate: 5,
            comment: ' "Compliments daily from this hat! Will buy again!!" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Anna G',
            age: null,
            city: null,
            rate: 5,
            comment: ' "I love this posters! I couldnt be happier with the product. Such great detail in the image. Im definitely buying more products right now! Thank you for your product." ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Andrew',
            age: null,
            city: null,
            rate: 5,
            comment: ' "I absolutely love this product! It exceeded my expectations in every way. The quality is outstanding, and it has made my life so much easier. Highly recommended!" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Gina',
            age: null,
            city: null,
            rate: 5,
            comment: ' "Ive been using this t-shirt for a while now, and Im impressed with its quality and great value for the price. Im a satisfied customer!" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Harry P',
            age: null,
            city: null,
            rate: 5,
            comment: ' "I recently purchased a bennie, and Im thrilled with the product. It is super warm and. Im impressed with its durability and quality" ',
            date: '12/05/2023',
            img: ''
        },

        
    ];
}

/*
- I have an angular app when one of the sections will display clients rating about the product. I will display 12 rating at a time. I want that every 10 seconds, 12 new ratings substitute the currents one, without using a carousel. All the ratings are inside of an array and I am using a *ngFor to dynamically display all of them. What are your suggestion on how to do that?

- This way, every 10 seconds, the currentIndex variable is incremented by 12, causing the ngFor loop to display a new set of 12 ratings from the array. When the end of the array is reached, the currentIndex is reset to 0 using the modulo operator, causing the loop to start over from the beginning of the array.

*/