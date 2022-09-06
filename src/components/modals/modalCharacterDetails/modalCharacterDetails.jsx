import React from "react";
import "./modalCharacterDetails.scss";

// External components
import ModalBase from "../modalBase/modalBase";
import CharacterStatusBadge from "../../characterStatusBadge/characterStatusBadge";
import CharacterGenderBadge from "../../characterGenderBadge/characterGenderBadge";

export default function ModalCharacterDetils({ character, isActive, onClose }) {
  return (
    <ModalBase isActive={isActive} title="Character details" onClose={onClose}>
      {character && (
        <div className="character-details-container">
          <img src={character.image} alt="" />
          <div className="character-details">
            <span className="details-header">
              <div className="character-name">{character.name}</div>
              <div className="character-status-badges-container">
                <CharacterStatusBadge
                  status={character.status}
                ></CharacterStatusBadge>
                <CharacterGenderBadge
                  gender={character.gender}
                ></CharacterGenderBadge>
              </div>
            </span>
            <hr />
            <div className="character-secondary-details">
              <div className="character-species">
                Species: {character.species}
              </div>
              <div className="character-origin">
                Origin: {character.origin.name}
              </div>
              <div className="character-location">
                Location: {character.location.name}
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalBase>
  );
}
