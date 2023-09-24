import React from "react";
import "./proposta.css";

const subscriptions = [
  {
    id: 1,
    name: "Plano Básico",
    oldPrice: "$12.99/mês",
    price: "$9.99/mês",
    features: ["Recursos básicos", "Sem anúncios", "Qualidade padrão"],
  },
  {
    id: 2,
    name: "Plano Premium",
    oldPrice: "$24.99/mês",
    price: "$19.99/mês",
    features: ["Recursos premium", "Sem anúncios", "Qualidade HD"],
  },
  {
    id: 3,
    name: "Plano Premium Plus",
    oldPrice: "$34.99/mês",
    price: "$29.99/mês",
    features: ["Recursos premium+", "Sem anúncios", "Qualidade 4K"],
  },
];

function Proposta() {
  return (
    <div className="proposta">
      <h1>Super Promoção! Assine Nossos Planos Agora e Economize!</h1>
      <div className="container">
        <div className="row">
          {subscriptions.map((subscription) => (
            <div key={subscription.id} className="col-md-4">
              <div className="subscription-card">
                <h3>{subscription.name}</h3>
                <p className="old-price">{subscription.oldPrice}</p>
                <p className="current-price">{subscription.price}</p>
                <ul>
                  {subscription.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button>Assinar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proposta;