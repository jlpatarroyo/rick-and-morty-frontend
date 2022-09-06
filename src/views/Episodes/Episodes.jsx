import React, { useState, useEffect } from "react";
import "./episodes.scss";

// API
import { getEpisodes } from "../../api/episodesServices";

// External components
import Pagination from "../../components/pagination/pagination";
import InfoCard from "../../components/infoCard/infoCard";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [filters, setFilters] = useState({ page: 1 });
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const { info, results } = await getEpisodes(filters);
      setEpisodes(results);
      setPagination(info);
    };
    fetchEpisodes();
  }, [filters]);

  const onPageChange = (quantity) => {
    setFilters({ ...filters, page: filters.page + quantity });
    document
      .getElementById("MainLayout")
      .scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="Episodes">
      <div className="episodes-grid">
        {episodes.map((episode) => (
          <InfoCard key={episode.id} height={100} width={200}>
            <div className="episode-card-content">
              <div className="episode-id">{episode.id}</div>
              <div className="episode-details">
                <div className="episode-code">{episode.episode}</div>
                <div className="episode-name">{episode.name}</div>
              </div>
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
    </div>
  );
}
