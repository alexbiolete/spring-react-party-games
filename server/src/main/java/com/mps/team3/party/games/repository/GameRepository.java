package com.mps.team3.party.games.repository;

import com.mps.team3.party.games.dao.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository  extends JpaRepository<Game, Integer> {
}
