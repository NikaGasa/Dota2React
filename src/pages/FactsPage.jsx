import React from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "../components/common/Card";
import Spinner from "../components/common/Spinner";

const FactsPage = () => {
  const {
    data: heroes,
    loading,
    error,
  } = useFetch("https://api.opendota.com/api/heroes");

  if (loading) return <Spinner />;
  if (error)
    return (
      <p style={{ color: "red" }}>Error loading heroes: {error.message}</p>
    );
  if (!heroes || heroes.length === 0) return <p>No heroes found.</p>;

  return (
    <div className="facts-container">
      <h1 style={{ textAlign: "center" }}>Heroes of Dota 2</h1>
      <div className="card-grid">
        {heroes.map((hero) => {
          const imgUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
            "npc_dota_hero_",
            ""
          )}.png`;
          return (
            <Card
              key={hero.id}
              title={hero.localized_name}
              body={`Primary Attribute: ${hero.primary_attr}, Attack Type: ${hero.attack_type}`}
              img={imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FactsPage;
