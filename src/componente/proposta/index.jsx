import React from "react";
import "./proposta.css"; 

// Array de objetos que representa informações sobre os planos de assinatura
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
    <>
      <section id="planos"> {/* Seção que engloba os planos */}
        <h1>Super Promoção! Assine Nossos Planos Agora e Economize!</h1> 
        <div className="container-fluid"> {/* Container Bootstrap */}
          <div className="row"> {/* Linha Bootstrap */}
            {subscriptions.map((subscription) => (
              <div key={subscription.id} className="col-md-4"> {/* Coluna Bootstrap */}
                <div className="subscription-card"> {/* Cartão de plano de assinatura */}
                  <h3>{subscription.name}</h3> {/* Nome do plano */}
                  <p className="old-price">{subscription.oldPrice}</p> {/* Preço antigo */}
                  <p className="current-price">{subscription.price}</p> {/* Preço atual */}
                  <ul>
                    {subscription.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button aria-label={`Assinar ${subscription.name}`}>Assinar</button> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Proposta; 