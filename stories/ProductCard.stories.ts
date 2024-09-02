import { fn } from "@storybook/test";
import ProductCard from "../components/ProductCard.vue";
import '../assets/css/tailwind.css'

export default {
    title: 'Product Card',
    component: ProductCard,
    tags: ['autodocs'],
    argTypes: {
        title: { control: {type: 'text'} },
        price: { control: {type: 'text'} },
        primaryPicture: { control: {type: 'text'} },
        secondaryPicture: { control: {type: 'text'} },
    },

    args: { pictureHover: fn() },
};

export const Primary = {
    args: {
        title: 'Your Title',
        price: "59.00",
        primaryPicture: "https://www.my-jewellery.com/media/catalog/product/cache/0021537bae359a5c22a4f8c00d758a48/b/l/black-blouse-with-beige-embroidery-front.jpg",
        secondaryPicture: "https://www.my-jewellery.com/media/catalog/product/cache/0021537bae359a5c22a4f8c00d758a48/b/l/black-blouse-with-beige-embroidery-close-up.jpg"
    }
}