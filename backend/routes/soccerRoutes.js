import { addNewPlayer, deletePlayer, getPlayers, getPlayerWithID, UpdatePlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer);
    
    app.route('/player/:PlayerId')
    // GET single player endpoint
        .get(getPlayerWithID)
        // Update single player
        .put(UpdatePlayer)
        // Delete endpoint
        .delete(deletePlayer);
}

export default routes;