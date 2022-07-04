const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const sectionsPath = path.join(__dirname, "../templates/sections");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
hbs.registerPartials(sectionsPath);

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    data: [
      {
        title: "Detailed descriptions",
        description:
          "Include detailed descriptions on projects you've worked on and personal skills that you possess",
        icon: "icon-search",
      },
      {
        title: "In-depth intro",
        description:
          "Provide a more detailed introduction so hiring managers can get a better understanding of who you are",
        icon: "icon-profile-male",
      },
      {
        title: "Include images",
        description:
          "Add images of projects you've been involved in to help hiring managers better understand your experiences",
        icon: "icon-pictures",
      },
    ],
    option: [
      {
        title: "Landing page",
        subtitle: "Experience",
        description:
          "Websumes with a landing page are designed to be more eye-catching to the user. The user will be greated with a captivating landing page and will then have to press a button on that page to be redirected to your resume.",
        exampleone: "https://shawn-baker.herokuapp.com/",
        exampletwo: "https://allie-leforest.herokuapp.com/",
        id: "in-left",
      },
      {
        title: "No landing page",
        subtitle: "Simple",
        description:
          "Websumes without a landing page are simple and get straight to the point. The user is pointed directly to your resume, and there is no need for the user to interact with the webpage, all they have to do is scroll!",
        exampleone: "https://sophie-reynolds.herokuapp.com/",
        exampletwo: "https://bryce-johnson.herokuapp.com/",
        id: "in-right",
      },
    ],

    domain: [
      {
        title: "Default domain",
        description:
          "We use Heroku to deploy your site, which means the Heroku name will be included in the domain. An example of a default domain is www.johndoe.herokuapp.com",
        icon: "icon-gears",
      },
      {
        title: "Custom domain",
        description:
          "A custom domain can be anything you want, as long as it's not already being used. A custom domain will eliminate Heroku's name in your domain. A custom domain example is www.johndoe.com",
        icon: "icon-linegraph",
      },
    ],

    step: [
      {
        number: "1",
        title: "Fill out form",
        description:
          "Fill out the contact form at the bottom of the page and submit it. Include a promo code if applicable; if the promo code is valid, you will recieve a 10% discount on your purchase. After submitting the form, we will reach out to your via the email you provided within 24 hours.",
      },
      {
        number: "2",
        title: "Send information",
        description:
          "After our team reaches out to you, send us your resume and any other information you want on the site, and our team will generate a design based upon the contents of it. Include photos, images of certifcates, or any other information that you want to be on the site.",
      },
    ],
    finalSteps: [
      {
        number: "3",
        title: "Approve design",
        description:
          "Once the design is completed, we will send a link to your email for you to follow so you can view the website. This is your chance to specifiy any changes or additions you want to the site. It is important that you include all desired changes (if any) and email it to websume.net@gmail.com.",
      },
      {
        number: "4",
        title: "Submit payment",
        description:
          "After the desired changes are made to the site, it is time to submit your payment. Please specify in the contact form how you intend to pay. Once the payment is recieved, we will deploy your final site to the internet.",
      },
    ],
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/thanks", (req, res) => {
  res.render("thanks");
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
