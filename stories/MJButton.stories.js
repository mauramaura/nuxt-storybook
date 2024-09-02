import MJButton from '../components/MJButton.vue';
import '../assets/css/tailwind.css'

export default {
    title: 'My Jewellery Button',
    component: MJButton,
    tags: ['autodocs'],
    argTypes: {
        label: { control: {type: 'text'} },
    },

    args: { },
};

export const Primary = {
    args: {
        label: 'Add to cart',
    }
}