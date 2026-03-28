import GameDetailPage from "@/components/GameDetailPage";
import { getGameBySlug } from "@/data/projects";

const ShooterSam = () => {
  const game = getGameBySlug("shootersam");

  if (!game) {
    return null;
  }

  return <GameDetailPage game={game} />;
};

export default ShooterSam;
