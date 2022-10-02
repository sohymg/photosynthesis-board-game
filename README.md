# Photosynthesis Helper

Calculates light points and scoring for the [Photosynthesis board game](https://boardgamegeek.com/boardgame/218603/photosynthesis).

## Usage

Visit https://sohymg.github.io/photosynthesis-board-game/

### Adding a Tree

Tap on an empty cell corresponding to where the player is growing a tree from a seed.

Select the player's tree colour from the popup.

### Growing a Tree

Tap on an existing tree to grow it to the next level.

### Harvesting a Tree

When a tree has grown to a Large Tree (indicated with `iii`), tapping one more time will harvest the tree.

The space on the board is cleared, and the score is incremented based on the tree's location and how soon it was harvested.
See the game rules for scoring details.

### Undo

Since clearing a cell also harvests a tree and thus affects the scoring, an `Undo` function has been added to reverse the last move.

### Move Sun

This just shifts the red border around the light point indicator.
It allows players to quickly see how many light points they will earn for each of the sun positions with the current layout.