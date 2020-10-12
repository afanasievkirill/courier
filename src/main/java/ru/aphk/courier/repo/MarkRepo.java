package ru.aphk.courier.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.aphk.courier.domain.Mark;

public interface MarkRepo extends JpaRepository<Mark, Long> {
}
