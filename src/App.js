import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const priceCards = [
    {
      plan: "Free",
      price: "0",
      features: [
        {
          title: "Single User",
          correct: true,
        },
        {
          title: "5GB Storage",
          correct: true,
        },
        {
          title: "Unlimited Public Projects",
          correct: true,
        },
        {
          title: "Community Access",
          correct: true,
        },
        {
          title: "Unlimited Private Projects",
          correct: false,
        },
        {
          title: "Dedicated Phone Support",
          correct: false,
        },
        {
          title: "Free Subdomain",
          correct: false,
        },
        {
          title: "Monthly Status Reports",
          correct: false,
        },
      ],
    },
    {
      plan: "Plus",
      price: "9",
      features: [
        {
          title: "5 User",
          correct: true,
          highlight: true,
        },
        {
          title: "50 GB Storage",
          correct: true,
        },
        {
          title: "Unlimited Public Projects",
          correct: true,
        },
        {
          title: "Community Access",
          correct: true,
        },
        {
          title: "Unlimited Private Projects",
          correct: true,
        },
        {
          title: "Dedicated Phone Support",
          correct: true,
        },
        {
          title: "Free Subdomain",
          correct: true,
        },
        {
          title: "Monthly Status Reports",
          correct: false,
        },
      ],
    },
    {
      plan: "Pro",
      price: "49",
      highlight: true,
      features: [
        {
          title: "Unlimited User",
          correct: true,
          highlight: true,
        },
        {
          title: "150 GB Storage",
          correct: true,
        },
        {
          title: "Unlimited Public Projects",
          correct: true,
        },
        {
          title: "Community Access",
          correct: true,
        },
        {
          title: "Unlimited Private Projects",
          correct: true,
        },
        {
          title: "Dedicated Phone Support",
          correct: true,
        },
        {
          title: "Unlimited Free Subdomain",
          correct: true,
        },
        {
          title: "Monthly Status Reports",
          correct: true,
        },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {priceCards.map((card) => {
            return <Card card={card}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
