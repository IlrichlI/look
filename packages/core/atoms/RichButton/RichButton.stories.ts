import { RichButton } from './index';

export default {
  title: 'Core/Atoms/RichButton',
  component: RichButton,
  args: { type: 'primary', text: 'story book' },
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      options: ['small', 'medium', 'large'],
      control: 'select'
    },
  },
};

const Template = (args: any) => ({
  components: { RichButton },
  setup() { return { args }; },
  template: '<rich-button v-bind="args">{{ args.text }}</rich-button>',
});

export const Primary = Template.bind({});
Primary.args = { type: 'primary', text: 'primary story book' };

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary', text: 'secondary story book' };