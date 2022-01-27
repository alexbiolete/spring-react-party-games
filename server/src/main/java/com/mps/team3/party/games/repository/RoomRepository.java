package com.mps.team3.party.games.repository;

import com.mps.team3.party.games.dao.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
    @Modifying
    @Transactional
    @Query(value = "UPDATE room r SET r.seed = r.seed + 1 WHERE r.id = ?1", nativeQuery = true)
    public void incrementSeed(int roomId);
}
