const app = Vue.createApp({});
//populate menu with a variable
app.component("mymenu", {
  props: ["menu"], //defining the props
  template:
    //defining template for the menu list
    `
    <ul>
        <li>Home</li>
        <li>Settings</li>
        <li>About</li>
    </ul>  
    `,
});
app.mount("#app");
