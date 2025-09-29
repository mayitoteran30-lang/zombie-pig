player.onChat("run", function () {
	
})
player.onItemInteracted(IRON_SHOVEL, function () {
    mobs.spawn(PIG, pos(5, 0, 0))
    mobs.spawn(PRIMED_TNT, pos(5, 0, 0))
})
