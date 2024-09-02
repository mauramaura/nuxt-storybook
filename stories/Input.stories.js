import { fn } from "@storybook/test";
import Input from "./Input.vue";

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        placeholder: { control: {type: 'text'} },
        // color: { control: {type: 'select'}, options: ['indigo', 'violet', 'purple', 'blue', 'emerald'] },
        // variant: { control: {type: 'select'}, options: ['outline', 'none'] },
    },

    args: { onClick: fn() },
};

export const Primary = {
    args: {
        placeholder: 'Example placeholder'
    }
}