import GameDetailPage from "@/components/GameDetailPage";
import { getGameBySlug } from "@/data/projects";

const ObstacleAssault = () => {
  const game = getGameBySlug("obstacleassault");

  if (!game) {
    return null;
  }

  return <GameDetailPage game={game} />;
};

export default ObstacleAssault;
