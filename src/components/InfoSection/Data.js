 export const homeObjOne =  {
    id:'home',
    lightBg : false ,
    lightText: false ,
    lightTextDesc: true,
    topLine: 'Serene Supply',
    headline: 'Untroubled Supply of deficient needs',
    description:'Get access to our exclusive app that gives you access to an untroubled supply of deficient items .',
    buttonLabel :'Get Started',
    imgStart:false,
    img : require('../../images/Serene.png'),
    alt : 'Car',
    dark:false,
    primary:false,
    darkText:true,
    to:"signuppage",

}

 export const homeObjTwo = {
   id: "about",
   lightBg: true,
   lightText: true,
   lightTextDesc: true,
   topLine: "Secure Messaging",
   headline: "Private Communication with agents",
   description:"Our inbuilt App Messenger allows easy and secure communication to and fro from both parties , the client and the agent .",
   buttonLabel: "Learn More",
   imgStart: true,
   img: require("../../images/Agent.png"),
   alt: "Agents",
   dark: true,
   primary: true,
   darkText: false,
   needSpace: true,
   to:"servicespage"
 };
  export const homeObjThree = {
    id: "signup",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Join our Team",
    headline: "Creating an account is extremely easy",
    description:
      "Get everything ready and set up in 10 minutes , all you have to do is add you are information and you are ready to go",
    buttonLabel: "Start now",
    imgStart: false,
    img: require("../../images/Chatting.png"),
    alt: "Chat",
    dark: false,
    primary: false,
    darkText: true,
    to:"signuppage"
  };
