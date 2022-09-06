import React, { useEffect, useState } from "react";
import "./characters.scss";

// Store
import { useSelector } from "react-redux";

// API
import { getCharacters } from "../../api/charactersService";

// External components
import InfoCard from "../../components/infoCard/infoCard";
import ModalCharacterDetils from "../../components/modals/modalCharacterDetails/modalCharacterDetails";
import Pagination from "../../components/pagination/pagination";
import CharacterFilters from "../../components/characterFilters/characterFilters";
import CharacterStatusBadge from "../../components/characterStatusBadge/characterStatusBadge";
import CharacterGenderBadge from "../../components/characterGenderBadge/characterGenderBadge";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    page: 1,
  });
  const [pagination, setPagination] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const isMobileDevice = useSelector((store) => store.isMobileDevice);

  useEffect(() => {
    const fetchCharacters = async () => {
      const { results, info } = await getCharacters(filters);
      setCharacters(results);
      setPagination(info);
    };
    fetchCharacters();
  }, [filters]);

  const onPageChange = (quantity) => {
    const target = { name: "page", value: filters.page + quantity };
    onChangeFilters({ target });
    document
      .getElementById("MainLayout")
      .scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const onChangeFilters = (e) => {
    const { name, value } = e.target;
    if (name !== "page") {
      setFilters({ ...filters, [name]: value, page: 1 });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  return (
    <div className="Characters">
      <CharacterFilters
        filters={filters}
        onChangeFilters={onChangeFilters}
      ></CharacterFilters>
      <div className="characters-grid">
        {characters.map((character) => (
          <InfoCard
            key={character.id}
            height={null}
            width={isMobileDevice ? 150 : 200}
            handleCardClick={() => setCurrentCharacter(character)}
          >
            <img className="character-image" src={character.image} alt="" />
            <div className="character-info-body">
              <div className="character-name">{character.name}</div>
            </div>
            <div className="card-status-badges-container">
              <CharacterStatusBadge
                status={character.status}
              ></CharacterStatusBadge>
              <CharacterGenderBadge
                gender={character.gender}
              ></CharacterGenderBadge>
            </div>
          </InfoCard>
        ))}
      </div>
      {pagination && (
        <Pagination
          currentPage={filters.page}
          totalPages={pagination.pages}
          onPageChange={onPageChange}
        ></Pagination>
      )}

      <ModalCharacterDetils
        isActive={currentCharacter}
        character={currentCharacter}
        onClose={() => setCurrentCharacter(null)}
      ></ModalCharacterDetils>
    </div>
  );
}
