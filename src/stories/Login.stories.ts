import Login from "../pages/Login.vue";

export default {
  title: "Login",
  component: Login,
};

const Template = (args: any) => ({
  components: { Login },
  setup() {
    return {
      args,
    };
  },
  template: '<Login v-bind="args"/>',
});

export const Primary = Template.bind({});

