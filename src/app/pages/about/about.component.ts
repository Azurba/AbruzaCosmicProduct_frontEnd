import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  about : string[] = ['At Abruza, our passion for the cosmos and exploration has driven us to curate a unique collection of products that capture the enchantment and mystery of space. Whether you are an avid stargazer, a budding astronomer, or simply someone who appreciates the infinite wonders of the cosmos, our store has something for you.',
  'At Abruza, our passion for the cosmos and exploration has driven us to curate a unique collection of products that capture the enchantment and mystery of space. Whether you are an avid stargazer, a budding astronomer, or simply someone who appreciates the infinite wonders of the cosmos, our store has something for you.',
  'Indulge your sense of style with our collection of t-shirts and hats, meticulously designed to showcase the splendor of galaxies, constellations, and nebulae. Each piece is crafted with utmost care, using high-quality materials that ensure both comfort and durability. Let your clothing become a cosmic canvas, expressing your love for the universe with every step you take.',
  'For those seeking to explore the universe with more than just their wardrobe, our selection of telescopes is sure to astound. Whether you are a beginner or an experienced astronomer, our telescopes offer exceptional clarity and precision, allowing you to witness the wonders of distant stars, planets, and galaxies from the comfort of your own backyard.',
  'If knowledge is what you seek, delve into our captivating array of books that delve into the mysteries and science of the universe. From breathtaking photo collections to educational guides and mind-expanding literature, our collection will transport you to far-off worlds and spark your curiosity about the vastness of space.',
  'But why stop there? Abruza goes above and beyond by offering exclusive trips to the International Space Station, where you can experience firsthand the sensation of weightlessness and witness Earth from a perspective few have ever achieved. These once-in-a-lifetime journeys allow you to become part of the incredible legacy of space exploration and make memories that will truly last a lifetime.',
  'We are passionate about providing exceptional customer service and ensuring your shopping experience with us is as stellar as the universe itself. Our dedicated team is always ready to assist you, answer your questions, and guide you on your cosmic journey. Your satisfaction is our highest priority.',
  'So, embark on a voyage through the cosmos with Abruza. Let us ignite your imagination, inspire your sense of wonder, and help you discover the magnificence of the universe. Explore our universe-themed products today and join us in celebrating the beauty that lies beyond our world.'
];

  delivery : string = "At Abruza, we strive to provide a seamless and efficient delivery experience for all our customers. Here are the key points of our delivery policy: 1) Shipping Options: We offer various shipping options to cater to your needs. During the checkout process, you can select the preferred shipping method based on the available options and your location. 2) Processing Time: Once your order is placed, we make every effort to process it as quickly as possible. Our standard processing time is typically 1-2 business days. However, please note that certain personalized or made-to-order items may require additional processing time, which will be clearly communicated during the ordering process. 3) Shipping Time: The estimated shipping time depends on your location and the shipping method you choose. We work with reliable shipping partners to ensure timely delivery. Please note that unforeseen circumstances such as weather conditions or logistical issues may cause slight delays, but we will keep you informed throughout the shipping process. 4) Tracking and Notifications: Once your order is shipped, we will provide you with a tracking number that allows you to monitor the progress of your delivery. Additionally, we will send you regular updates and notifications via email or SMS, keeping you informed about the status of your package. 5) International Shipping: We offer international shipping to many countries. However, please be aware that customs duties, taxes, or other import charges may apply, depending on your country's regulations. These charges are the responsibility of the recipient and are not included in the product or shipping prices. Please consult your local customs office for more information.";
  returnP : string = " We want you to be completely satisfied with your purchase from Abruza. If for any reason you are not satisfied, we offer a hassle-free return policy. Here are the main points of our return policy: 1) Eligibility: To be eligible for a return, the item must be unused, in its original condition, and in the original packaging. Certain items, such as personalized or custom-made products, may not be eligible for return. Any exceptions to our return policy will be clearly stated on the product page. 2) Timeframe: You may initiate a return within 30 days of receiving your order. After this period, unfortunately, we are unable to accept returns. 3) Return Process: To initiate a return, please contact our customer support team with your order details. They will guide you through the return process and provide you with the necessary instructions and shipping details. 4) Return Shipping: The cost of return shipping is the responsibility of the customer unless the return is due to a defect or error on our part. We recommend using a reliable shipping method with tracking to ensure the safe return of the item. Once we receive the returned item and verify its condition, we will process the refund. 5) Refunds: Refunds will be issued in the original form of payment within a reasonable timeframe after we receive the returned item. Please note that it may take a few business days for the refund to reflect in your account, depending on your bank or credit card provider.";
  
  isModalOpen : boolean = false;
  modalItem? : string;

  openModal(item: string) {
    if(item == 'returnP'){
      this.modalItem = this.returnP
    }else{
      this.modalItem = this.delivery
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
