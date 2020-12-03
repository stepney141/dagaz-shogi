Dagaz.Controller.persistense = "none";

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("chu-shogi-promotion", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("12a", [13, 12, 0, 1, 0, 0, 0, 0]);
    design.addPosition("11a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("10a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("9a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("8a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("7a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("6a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("5a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("4a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("3a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("2a", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("1a", [0, 12, 11, 0, -1, 0, 0, 0]);
    design.addPosition("12b", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2b", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1b", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12c", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2c", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1c", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12d", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2d", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1d", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12e", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2e", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1e", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12f", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2f", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1f", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12g", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2g", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1g", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12h", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2h", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1h", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12i", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2i", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1i", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12j", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2j", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1j", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12k", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("10k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("9k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("8k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("7k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("6k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("5k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("4k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("3k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("2k", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("1k", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("12l", [0, 0, 0, 1, 0, -11, 0, -12]);
    design.addPosition("11l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("10l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("9l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("8l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("7l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("6l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("5l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("4l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("3l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("2l", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("1l", [0, 0, 0, 0, -1, 0, -13, -12]);

    design.addZone("promotion-zone", 2, [107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122, 121, 120, 143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132]);
    design.addZone("promotion-zone", 1, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// left-1-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.MODE,	2);	// left-nw-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.MODE,	3);	// left-ne-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Pawn", 0, 1);
    design.addMove(0, 0, [7], 0);

    design.addPiece("Go-Between", 1, 1);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("Bishop", 2, 10);
    design.addMove(2, 1, [6, 6], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 1, [5, 5], 0);
    design.addMove(2, 1, [0, 0], 0);

    design.addPiece("Bishop!", 3, 10);
    design.addMove(3, 1, [6, 6], 0);
    design.addMove(3, 1, [2, 2], 0);
    design.addMove(3, 1, [5, 5], 0);
    design.addMove(3, 1, [0, 0], 0);

    design.addPiece("Rook", 4, 12);
    design.addMove(4, 1, [7, 7], 0);
    design.addMove(4, 1, [1, 1], 0);
    design.addMove(4, 1, [4, 4], 0);
    design.addMove(4, 1, [3, 3], 0);

    design.addPiece("Rook!", 5, 12);
    design.addMove(5, 1, [7, 7], 0);
    design.addMove(5, 1, [1, 1], 0);
    design.addMove(5, 1, [4, 4], 0);
    design.addMove(5, 1, [3, 3], 0);

    design.addPiece("Free-King", 6, 22);
    design.addMove(6, 1, [7, 7], 0);
    design.addMove(6, 1, [1, 1], 0);
    design.addMove(6, 1, [4, 4], 0);
    design.addMove(6, 1, [3, 3], 0);
    design.addMove(6, 1, [6, 6], 0);
    design.addMove(6, 1, [2, 2], 0);
    design.addMove(6, 1, [5, 5], 0);
    design.addMove(6, 1, [0, 0], 0);

    design.addPiece("Drunk-Elephant!", 7, 5);
    design.addMove(7, 0, [7], 0);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [6], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [5], 0);
    design.addMove(7, 0, [0], 0);

    design.addPiece("Flying-Ox", 8, 16);
    design.addMove(8, 1, [7, 7], 0);
    design.addMove(8, 1, [1, 1], 0);
    design.addMove(8, 1, [6, 6], 0);
    design.addMove(8, 1, [2, 2], 0);
    design.addMove(8, 1, [5, 5], 0);
    design.addMove(8, 1, [0, 0], 0);

    design.addPiece("Free-Boar", 9, 16);
    design.addMove(9, 1, [4, 4], 0);
    design.addMove(9, 1, [3, 3], 0);
    design.addMove(9, 1, [6, 6], 0);
    design.addMove(9, 1, [2, 2], 0);
    design.addMove(9, 1, [5, 5], 0);
    design.addMove(9, 1, [0, 0], 0);

    design.addPiece("Horned-Falcon", 10, 19);
    design.addMove(10, 1, [1, 1], 0);
    design.addMove(10, 1, [4, 4], 0);
    design.addMove(10, 1, [3, 3], 0);
    design.addMove(10, 1, [6, 6], 0);
    design.addMove(10, 1, [2, 2], 0);
    design.addMove(10, 1, [5, 5], 0);
    design.addMove(10, 1, [0, 0], 0);
    design.addMove(10, 2, [7], 0);
    design.addMove(10, 3, [7, 7], 0);
    design.addMove(10, 0, [7], 1);
    design.addMove(10, 0, [1], 1);

    design.addPiece("Soaring-Eagle", 11, 18);
    design.addMove(11, 1, [7, 7], 0);
    design.addMove(11, 1, [1, 1], 0);
    design.addMove(11, 1, [4, 4], 0);
    design.addMove(11, 1, [3, 3], 0);
    design.addMove(11, 1, [2, 2], 0);
    design.addMove(11, 1, [0, 0], 0);
    design.addMove(11, 4, [6], 0);
    design.addMove(11, 3, [6, 6], 0);
    design.addMove(11, 5, [5], 0);
    design.addMove(11, 3, [5, 5], 0);
    design.addMove(11, 0, [6], 2);
    design.addMove(11, 0, [0], 2);
    design.addMove(11, 0, [5], 3);
    design.addMove(11, 0, [2], 3);

    design.addPiece("Whale", 12, 10);
    design.addMove(12, 1, [7, 7], 0);
    design.addMove(12, 1, [1, 1], 0);
    design.addMove(12, 1, [2, 2], 0);
    design.addMove(12, 1, [0, 0], 0);

    design.addPiece("White-Horse", 13, 14);
    design.addMove(13, 1, [7, 7], 0);
    design.addMove(13, 1, [1, 1], 0);
    design.addMove(13, 1, [6, 6], 0);
    design.addMove(13, 1, [5, 5], 0);

    design.addPiece("Lion", 14, 20);
    design.addMove(14, 2, [7], 0);
    design.addMove(14, 2, [1], 0);
    design.addMove(14, 2, [4], 0);
    design.addMove(14, 2, [3], 0);
    design.addMove(14, 2, [6], 0);
    design.addMove(14, 2, [0], 0);
    design.addMove(14, 2, [2], 0);
    design.addMove(14, 2, [5], 0);
    design.addMove(14, 3, [7, 7], 0);
    design.addMove(14, 3, [6, 6], 0);
    design.addMove(14, 3, [1, 1], 0);
    design.addMove(14, 3, [2, 2], 0);
    design.addMove(14, 3, [3, 3], 0);
    design.addMove(14, 3, [0, 0], 0);
    design.addMove(14, 3, [4, 4], 0);
    design.addMove(14, 3, [5, 5], 0);
    design.addMove(14, 3, [7, 5], 0);
    design.addMove(14, 3, [7, 6], 0);
    design.addMove(14, 3, [1, 0], 0);
    design.addMove(14, 3, [1, 2], 0);
    design.addMove(14, 3, [3, 5], 0);
    design.addMove(14, 3, [3, 0], 0);
    design.addMove(14, 3, [4, 6], 0);
    design.addMove(14, 3, [4, 2], 0);
    design.addMove(14, 0, [7], 1);
    design.addMove(14, 0, [1], 1);
    design.addMove(14, 0, [4], 1);
    design.addMove(14, 0, [3], 1);
    design.addMove(14, 0, [6], 1);
    design.addMove(14, 0, [0], 1);
    design.addMove(14, 0, [2], 1);
    design.addMove(14, 0, [5], 1);

    design.addPiece("Lion!", 15, 20);
    design.addMove(15, 2, [7], 0);
    design.addMove(15, 2, [1], 0);
    design.addMove(15, 2, [4], 0);
    design.addMove(15, 2, [3], 0);
    design.addMove(15, 2, [6], 0);
    design.addMove(15, 2, [0], 0);
    design.addMove(15, 2, [2], 0);
    design.addMove(15, 2, [5], 0);
    design.addMove(15, 3, [7, 7], 0);
    design.addMove(15, 3, [6, 6], 0);
    design.addMove(15, 3, [1, 1], 0);
    design.addMove(15, 3, [2, 2], 0);
    design.addMove(15, 3, [3, 3], 0);
    design.addMove(15, 3, [0, 0], 0);
    design.addMove(15, 3, [4, 4], 0);
    design.addMove(15, 3, [5, 5], 0);
    design.addMove(15, 3, [7, 5], 0);
    design.addMove(15, 3, [7, 6], 0);
    design.addMove(15, 3, [1, 0], 0);
    design.addMove(15, 3, [1, 2], 0);
    design.addMove(15, 3, [3, 5], 0);
    design.addMove(15, 3, [3, 0], 0);
    design.addMove(15, 3, [4, 6], 0);
    design.addMove(15, 3, [4, 2], 0);
    design.addMove(15, 0, [7], 1);
    design.addMove(15, 0, [1], 1);
    design.addMove(15, 0, [4], 1);
    design.addMove(15, 0, [3], 1);
    design.addMove(15, 0, [6], 1);
    design.addMove(15, 0, [0], 1);
    design.addMove(15, 0, [2], 1);
    design.addMove(15, 0, [5], 1);

    design.addPiece("Dragon-King", 16, 17);
    design.addMove(16, 1, [7, 7], 0);
    design.addMove(16, 1, [1, 1], 0);
    design.addMove(16, 1, [4, 4], 0);
    design.addMove(16, 1, [3, 3], 0);
    design.addMove(16, 0, [6], 0);
    design.addMove(16, 0, [2], 0);
    design.addMove(16, 0, [5], 0);
    design.addMove(16, 0, [0], 0);

    design.addPiece("Dragon-King!", 17, 17);
    design.addMove(17, 1, [7, 7], 0);
    design.addMove(17, 1, [1, 1], 0);
    design.addMove(17, 1, [4, 4], 0);
    design.addMove(17, 1, [3, 3], 0);
    design.addMove(17, 0, [6], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [5], 0);
    design.addMove(17, 0, [0], 0);

    design.addPiece("Dragon-Horse", 18, 12);
    design.addMove(18, 1, [6, 6], 0);
    design.addMove(18, 1, [2, 2], 0);
    design.addMove(18, 1, [5, 5], 0);
    design.addMove(18, 1, [0, 0], 0);
    design.addMove(18, 0, [7], 0);
    design.addMove(18, 0, [1], 0);
    design.addMove(18, 0, [4], 0);
    design.addMove(18, 0, [3], 0);

    design.addPiece("Dragon-Horse!", 19, 12);
    design.addMove(19, 1, [6, 6], 0);
    design.addMove(19, 1, [2, 2], 0);
    design.addMove(19, 1, [5, 5], 0);
    design.addMove(19, 1, [0, 0], 0);
    design.addMove(19, 0, [7], 0);
    design.addMove(19, 0, [1], 0);
    design.addMove(19, 0, [4], 0);
    design.addMove(19, 0, [3], 0);

    design.addPiece("Kylin", 20, 8);
    design.addMove(20, 3, [7, 7], 0);
    design.addMove(20, 3, [1, 1], 0);
    design.addMove(20, 3, [4, 4], 0);
    design.addMove(20, 3, [3, 3], 0);
    design.addMove(20, 0, [6], 0);
    design.addMove(20, 0, [2], 0);
    design.addMove(20, 0, [5], 0);
    design.addMove(20, 0, [0], 0);

    design.addPiece("Phoenix", 21, 8);
    design.addMove(21, 0, [7], 0);
    design.addMove(21, 0, [1], 0);
    design.addMove(21, 0, [4], 0);
    design.addMove(21, 0, [3], 0);
    design.addMove(21, 3, [6, 6], 0);
    design.addMove(21, 3, [2, 2], 0);
    design.addMove(21, 3, [5, 5], 0);
    design.addMove(21, 3, [0, 0], 0);

    design.addPiece("Reverse-Chariot", 22, 6);
    design.addMove(22, 1, [7, 7], 0);
    design.addMove(22, 1, [1, 1], 0);

    design.addPiece("Side-Mover", 23, 7);
    design.addMove(23, 0, [7], 0);
    design.addMove(23, 0, [1], 0);
    design.addMove(23, 1, [4, 4], 0);
    design.addMove(23, 1, [3, 3], 0);

    design.addPiece("Side-Mover!", 24, 7);
    design.addMove(24, 0, [7], 0);
    design.addMove(24, 0, [1], 0);
    design.addMove(24, 1, [4, 4], 0);
    design.addMove(24, 1, [3, 3], 0);

    design.addPiece("Vertical-Mover", 25, 7);
    design.addMove(25, 0, [4], 0);
    design.addMove(25, 0, [3], 0);
    design.addMove(25, 1, [7, 7], 0);
    design.addMove(25, 1, [1, 1], 0);

    design.addPiece("Vertical-Mover!", 26, 7);
    design.addMove(26, 0, [4], 0);
    design.addMove(26, 0, [3], 0);
    design.addMove(26, 1, [7, 7], 0);
    design.addMove(26, 1, [1, 1], 0);

    design.addPiece("Flying-Stag", 27, 9);
    design.addMove(27, 1, [7, 7], 0);
    design.addMove(27, 1, [1, 1], 0);
    design.addMove(27, 0, [4], 0);
    design.addMove(27, 0, [3], 0);
    design.addMove(27, 0, [6], 0);
    design.addMove(27, 0, [2], 0);
    design.addMove(27, 0, [5], 0);
    design.addMove(27, 0, [0], 0);

    design.addPiece("Lance", 28, 6);
    design.addMove(28, 1, [7, 7], 0);

    design.addPiece("King", 29, 10000);
    design.addMove(29, 0, [7], 0);
    design.addMove(29, 0, [1], 0);
    design.addMove(29, 0, [4], 0);
    design.addMove(29, 0, [3], 0);
    design.addMove(29, 0, [6], 0);
    design.addMove(29, 0, [2], 0);
    design.addMove(29, 0, [5], 0);
    design.addMove(29, 0, [0], 0);

    design.addPiece("Crown-Prince", 30, 10000);
    design.addMove(30, 0, [7], 0);
    design.addMove(30, 0, [1], 0);
    design.addMove(30, 0, [4], 0);
    design.addMove(30, 0, [3], 0);
    design.addMove(30, 0, [6], 0);
    design.addMove(30, 0, [2], 0);
    design.addMove(30, 0, [5], 0);
    design.addMove(30, 0, [0], 0);

    design.addPiece("Blind-Tiger", 31, 4);
    design.addMove(31, 0, [1], 0);
    design.addMove(31, 0, [4], 0);
    design.addMove(31, 0, [3], 0);
    design.addMove(31, 0, [6], 0);
    design.addMove(31, 0, [2], 0);
    design.addMove(31, 0, [5], 0);
    design.addMove(31, 0, [0], 0);

    design.addPiece("Drunk-Elephant", 32, 5);
    design.addMove(32, 0, [7], 0);
    design.addMove(32, 0, [4], 0);
    design.addMove(32, 0, [3], 0);
    design.addMove(32, 0, [6], 0);
    design.addMove(32, 0, [2], 0);
    design.addMove(32, 0, [5], 0);
    design.addMove(32, 0, [0], 0);

    design.addPiece("Ferocious-Leopard", 33, 3);
    design.addMove(33, 0, [7], 0);
    design.addMove(33, 0, [1], 0);
    design.addMove(33, 0, [6], 0);
    design.addMove(33, 0, [2], 0);
    design.addMove(33, 0, [5], 0);
    design.addMove(33, 0, [0], 0);

    design.addPiece("Gold-General", 34, 3);
    design.addMove(34, 0, [7], 0);
    design.addMove(34, 0, [1], 0);
    design.addMove(34, 0, [4], 0);
    design.addMove(34, 0, [3], 0);
    design.addMove(34, 0, [6], 0);
    design.addMove(34, 0, [5], 0);

    design.addPiece("Tokin", 35, 3);
    design.addMove(35, 0, [7], 0);
    design.addMove(35, 0, [1], 0);
    design.addMove(35, 0, [4], 0);
    design.addMove(35, 0, [3], 0);
    design.addMove(35, 0, [6], 0);
    design.addMove(35, 0, [5], 0);

    design.addPiece("Silver-General", 36, 2);
    design.addMove(36, 0, [7], 0);
    design.addMove(36, 0, [6], 0);
    design.addMove(36, 0, [2], 0);
    design.addMove(36, 0, [5], 0);
    design.addMove(36, 0, [0], 0);

    design.addPiece("Copper-General", 37, 1);
    design.addMove(37, 0, [7], 0);
    design.addMove(37, 0, [1], 0);
    design.addMove(37, 0, [6], 0);
    design.addMove(37, 0, [5], 0);

    design.setup("White", "Go-Between", 51);
    design.setup("White", "Go-Between", 56);
    design.setup("White", "Pawn", 47);
    design.setup("White", "Pawn", 46);
    design.setup("White", "Pawn", 45);
    design.setup("White", "Pawn", 44);
    design.setup("White", "Pawn", 43);
    design.setup("White", "Pawn", 42);
    design.setup("White", "Pawn", 41);
    design.setup("White", "Pawn", 40);
    design.setup("White", "Pawn", 39);
    design.setup("White", "Pawn", 38);
    design.setup("White", "Pawn", 37);
    design.setup("White", "Pawn", 36);
    design.setup("White", "Lance", 0);
    design.setup("White", "Lance", 11);
    design.setup("White", "Ferocious-Leopard", 1);
    design.setup("White", "Ferocious-Leopard", 10);
    design.setup("White", "Copper-General", 2);
    design.setup("White", "Copper-General", 9);
    design.setup("White", "Silver-General", 3);
    design.setup("White", "Silver-General", 8);
    design.setup("White", "Gold-General", 4);
    design.setup("White", "Gold-General", 7);
    design.setup("White", "King", 6);
    design.setup("White", "Drunk-Elephant", 5);
    design.setup("White", "Reverse-Chariot", 12);
    design.setup("White", "Reverse-Chariot", 23);
    design.setup("White", "Bishop", 14);
    design.setup("White", "Bishop", 21);
    design.setup("White", "Blind-Tiger", 16);
    design.setup("White", "Blind-Tiger", 19);
    design.setup("White", "Kylin", 18);
    design.setup("White", "Phoenix", 17);
    design.setup("White", "Side-Mover", 24);
    design.setup("White", "Side-Mover", 35);
    design.setup("White", "Vertical-Mover", 25);
    design.setup("White", "Vertical-Mover", 34);
    design.setup("White", "Rook", 26);
    design.setup("White", "Rook", 33);
    design.setup("White", "Dragon-Horse", 27);
    design.setup("White", "Dragon-Horse", 32);
    design.setup("White", "Dragon-King", 28);
    design.setup("White", "Dragon-King", 31);
    design.setup("White", "Lion", 30);
    design.setup("White", "Free-King", 29);
    design.setup("Black", "Go-Between", 87);
    design.setup("Black", "Go-Between", 92);
    design.setup("Black", "Pawn", 107);
    design.setup("Black", "Pawn", 106);
    design.setup("Black", "Pawn", 105);
    design.setup("Black", "Pawn", 104);
    design.setup("Black", "Pawn", 103);
    design.setup("Black", "Pawn", 102);
    design.setup("Black", "Pawn", 101);
    design.setup("Black", "Pawn", 100);
    design.setup("Black", "Pawn", 99);
    design.setup("Black", "Pawn", 98);
    design.setup("Black", "Pawn", 97);
    design.setup("Black", "Pawn", 96);
    design.setup("Black", "Lance", 132);
    design.setup("Black", "Lance", 143);
    design.setup("Black", "Ferocious-Leopard", 133);
    design.setup("Black", "Ferocious-Leopard", 142);
    design.setup("Black", "Copper-General", 134);
    design.setup("Black", "Copper-General", 141);
    design.setup("Black", "Silver-General", 135);
    design.setup("Black", "Silver-General", 140);
    design.setup("Black", "Gold-General", 136);
    design.setup("Black", "Gold-General", 139);
    design.setup("Black", "King", 137);
    design.setup("Black", "Drunk-Elephant", 138);
    design.setup("Black", "Reverse-Chariot", 120);
    design.setup("Black", "Reverse-Chariot", 131);
    design.setup("Black", "Bishop", 122);
    design.setup("Black", "Bishop", 129);
    design.setup("Black", "Blind-Tiger", 124);
    design.setup("Black", "Blind-Tiger", 127);
    design.setup("Black", "Kylin", 125);
    design.setup("Black", "Phoenix", 126);
    design.setup("Black", "Side-Mover", 108);
    design.setup("Black", "Side-Mover", 119);
    design.setup("Black", "Vertical-Mover", 109);
    design.setup("Black", "Vertical-Mover", 118);
    design.setup("Black", "Rook", 110);
    design.setup("Black", "Rook", 117);
    design.setup("Black", "Dragon-Horse", 111);
    design.setup("Black", "Dragon-Horse", 116);
    design.setup("Black", "Dragon-King", 112);
    design.setup("Black", "Dragon-King", 115);
    design.setup("Black", "Lion", 113);
    design.setup("Black", "Free-King", 114);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteGo-Between", "White Go-Between");
    view.defPiece("BlackGo-Between", "Black Go-Between");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteBishop!", "White Bishop!");
    view.defPiece("BlackBishop!", "Black Bishop!");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteRook!", "White Rook!");
    view.defPiece("BlackRook!", "Black Rook!");
    view.defPiece("WhiteFree-King", "White Free-King");
    view.defPiece("BlackFree-King", "Black Free-King");
    view.defPiece("WhiteDrunk-Elephant!", "White Drunk-Elephant!");
    view.defPiece("BlackDrunk-Elephant!", "Black Drunk-Elephant!");
    view.defPiece("WhiteFlying-Ox", "White Flying-Ox");
    view.defPiece("BlackFlying-Ox", "Black Flying-Ox");
    view.defPiece("WhiteFree-Boar", "White Free-Boar");
    view.defPiece("BlackFree-Boar", "Black Free-Boar");
    view.defPiece("WhiteHorned-Falcon", "White Horned-Falcon");
    view.defPiece("BlackHorned-Falcon", "Black Horned-Falcon");
    view.defPiece("WhiteSoaring-Eagle", "White Soaring-Eagle");
    view.defPiece("BlackSoaring-Eagle", "Black Soaring-Eagle");
    view.defPiece("WhiteWhale", "White Whale");
    view.defPiece("BlackWhale", "Black Whale");
    view.defPiece("WhiteWhite-Horse", "White White-Horse");
    view.defPiece("BlackWhite-Horse", "Black White-Horse");
    view.defPiece("WhiteLion", "White Lion");
    view.defPiece("BlackLion", "Black Lion");
    view.defPiece("WhiteLion!", "White Lion!");
    view.defPiece("BlackLion!", "Black Lion!");
    view.defPiece("WhiteDragon-King", "White Dragon-King");
    view.defPiece("BlackDragon-King", "Black Dragon-King");
    view.defPiece("WhiteDragon-King!", "White Dragon-King!");
    view.defPiece("BlackDragon-King!", "Black Dragon-King!");
    view.defPiece("WhiteDragon-Horse", "White Dragon-Horse");
    view.defPiece("BlackDragon-Horse", "Black Dragon-Horse");
    view.defPiece("WhiteDragon-Horse!", "White Dragon-Horse!");
    view.defPiece("BlackDragon-Horse!", "Black Dragon-Horse!");
    view.defPiece("WhiteKylin", "White Kylin");
    view.defPiece("BlackKylin", "Black Kylin");
    view.defPiece("WhitePhoenix", "White Phoenix");
    view.defPiece("BlackPhoenix", "Black Phoenix");
    view.defPiece("WhiteReverse-Chariot", "White Reverse-Chariot");
    view.defPiece("BlackReverse-Chariot", "Black Reverse-Chariot");
    view.defPiece("WhiteSide-Mover", "White Side-Mover");
    view.defPiece("BlackSide-Mover", "Black Side-Mover");
    view.defPiece("WhiteSide-Mover!", "White Side-Mover!");
    view.defPiece("BlackSide-Mover!", "Black Side-Mover!");
    view.defPiece("WhiteVertical-Mover", "White Vertical-Mover");
    view.defPiece("BlackVertical-Mover", "Black Vertical-Mover");
    view.defPiece("WhiteVertical-Mover!", "White Vertical-Mover!");
    view.defPiece("BlackVertical-Mover!", "Black Vertical-Mover!");
    view.defPiece("WhiteFlying-Stag", "White Flying-Stag");
    view.defPiece("BlackFlying-Stag", "Black Flying-Stag");
    view.defPiece("WhiteLance", "White Lance");
    view.defPiece("BlackLance", "Black Lance");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteCrown-Prince", "White Crown-Prince");
    view.defPiece("BlackCrown-Prince", "Black Crown-Prince");
    view.defPiece("WhiteBlind-Tiger", "White Blind-Tiger");
    view.defPiece("BlackBlind-Tiger", "Black Blind-Tiger");
    view.defPiece("WhiteDrunk-Elephant", "White Drunk-Elephant");
    view.defPiece("BlackDrunk-Elephant", "Black Drunk-Elephant");
    view.defPiece("WhiteFerocious-Leopard", "White Ferocious-Leopard");
    view.defPiece("BlackFerocious-Leopard", "Black Ferocious-Leopard");
    view.defPiece("WhiteGold-General", "White Gold-General");
    view.defPiece("BlackGold-General", "Black Gold-General");
    view.defPiece("WhiteTokin", "White Tokin");
    view.defPiece("BlackTokin", "Black Tokin");
    view.defPiece("WhiteSilver-General", "White Silver-General");
    view.defPiece("BlackSilver-General", "Black Silver-General");
    view.defPiece("WhiteCopper-General", "White Copper-General");
    view.defPiece("BlackCopper-General", "Black Copper-General");
 
    view.defPosition("12a", 460, 460, 40, 40);
    view.defPosition("11a", 420, 460, 40, 40);
    view.defPosition("10a", 380, 460, 40, 40);
    view.defPosition("9a", 340, 460, 40, 40);
    view.defPosition("8a", 300, 460, 40, 40);
    view.defPosition("7a", 260, 460, 40, 40);
    view.defPosition("6a", 220, 460, 40, 40);
    view.defPosition("5a", 180, 460, 40, 40);
    view.defPosition("4a", 140, 460, 40, 40);
    view.defPosition("3a", 100, 460, 40, 40);
    view.defPosition("2a", 60, 460, 40, 40);
    view.defPosition("1a", 20, 460, 40, 40);
    view.defPosition("12b", 460, 420, 40, 40);
    view.defPosition("11b", 420, 420, 40, 40);
    view.defPosition("10b", 380, 420, 40, 40);
    view.defPosition("9b", 340, 420, 40, 40);
    view.defPosition("8b", 300, 420, 40, 40);
    view.defPosition("7b", 260, 420, 40, 40);
    view.defPosition("6b", 220, 420, 40, 40);
    view.defPosition("5b", 180, 420, 40, 40);
    view.defPosition("4b", 140, 420, 40, 40);
    view.defPosition("3b", 100, 420, 40, 40);
    view.defPosition("2b", 60, 420, 40, 40);
    view.defPosition("1b", 20, 420, 40, 40);
    view.defPosition("12c", 460, 380, 40, 40);
    view.defPosition("11c", 420, 380, 40, 40);
    view.defPosition("10c", 380, 380, 40, 40);
    view.defPosition("9c", 340, 380, 40, 40);
    view.defPosition("8c", 300, 380, 40, 40);
    view.defPosition("7c", 260, 380, 40, 40);
    view.defPosition("6c", 220, 380, 40, 40);
    view.defPosition("5c", 180, 380, 40, 40);
    view.defPosition("4c", 140, 380, 40, 40);
    view.defPosition("3c", 100, 380, 40, 40);
    view.defPosition("2c", 60, 380, 40, 40);
    view.defPosition("1c", 20, 380, 40, 40);
    view.defPosition("12d", 460, 340, 40, 40);
    view.defPosition("11d", 420, 340, 40, 40);
    view.defPosition("10d", 380, 340, 40, 40);
    view.defPosition("9d", 340, 340, 40, 40);
    view.defPosition("8d", 300, 340, 40, 40);
    view.defPosition("7d", 260, 340, 40, 40);
    view.defPosition("6d", 220, 340, 40, 40);
    view.defPosition("5d", 180, 340, 40, 40);
    view.defPosition("4d", 140, 340, 40, 40);
    view.defPosition("3d", 100, 340, 40, 40);
    view.defPosition("2d", 60, 340, 40, 40);
    view.defPosition("1d", 20, 340, 40, 40);
    view.defPosition("12e", 460, 300, 40, 40);
    view.defPosition("11e", 420, 300, 40, 40);
    view.defPosition("10e", 380, 300, 40, 40);
    view.defPosition("9e", 340, 300, 40, 40);
    view.defPosition("8e", 300, 300, 40, 40);
    view.defPosition("7e", 260, 300, 40, 40);
    view.defPosition("6e", 220, 300, 40, 40);
    view.defPosition("5e", 180, 300, 40, 40);
    view.defPosition("4e", 140, 300, 40, 40);
    view.defPosition("3e", 100, 300, 40, 40);
    view.defPosition("2e", 60, 300, 40, 40);
    view.defPosition("1e", 20, 300, 40, 40);
    view.defPosition("12f", 460, 260, 40, 40);
    view.defPosition("11f", 420, 260, 40, 40);
    view.defPosition("10f", 380, 260, 40, 40);
    view.defPosition("9f", 340, 260, 40, 40);
    view.defPosition("8f", 300, 260, 40, 40);
    view.defPosition("7f", 260, 260, 40, 40);
    view.defPosition("6f", 220, 260, 40, 40);
    view.defPosition("5f", 180, 260, 40, 40);
    view.defPosition("4f", 140, 260, 40, 40);
    view.defPosition("3f", 100, 260, 40, 40);
    view.defPosition("2f", 60, 260, 40, 40);
    view.defPosition("1f", 20, 260, 40, 40);
    view.defPosition("12g", 460, 220, 40, 40);
    view.defPosition("11g", 420, 220, 40, 40);
    view.defPosition("10g", 380, 220, 40, 40);
    view.defPosition("9g", 340, 220, 40, 40);
    view.defPosition("8g", 300, 220, 40, 40);
    view.defPosition("7g", 260, 220, 40, 40);
    view.defPosition("6g", 220, 220, 40, 40);
    view.defPosition("5g", 180, 220, 40, 40);
    view.defPosition("4g", 140, 220, 40, 40);
    view.defPosition("3g", 100, 220, 40, 40);
    view.defPosition("2g", 60, 220, 40, 40);
    view.defPosition("1g", 20, 220, 40, 40);
    view.defPosition("12h", 460, 180, 40, 40);
    view.defPosition("11h", 420, 180, 40, 40);
    view.defPosition("10h", 380, 180, 40, 40);
    view.defPosition("9h", 340, 180, 40, 40);
    view.defPosition("8h", 300, 180, 40, 40);
    view.defPosition("7h", 260, 180, 40, 40);
    view.defPosition("6h", 220, 180, 40, 40);
    view.defPosition("5h", 180, 180, 40, 40);
    view.defPosition("4h", 140, 180, 40, 40);
    view.defPosition("3h", 100, 180, 40, 40);
    view.defPosition("2h", 60, 180, 40, 40);
    view.defPosition("1h", 20, 180, 40, 40);
    view.defPosition("12i", 460, 140, 40, 40);
    view.defPosition("11i", 420, 140, 40, 40);
    view.defPosition("10i", 380, 140, 40, 40);
    view.defPosition("9i", 340, 140, 40, 40);
    view.defPosition("8i", 300, 140, 40, 40);
    view.defPosition("7i", 260, 140, 40, 40);
    view.defPosition("6i", 220, 140, 40, 40);
    view.defPosition("5i", 180, 140, 40, 40);
    view.defPosition("4i", 140, 140, 40, 40);
    view.defPosition("3i", 100, 140, 40, 40);
    view.defPosition("2i", 60, 140, 40, 40);
    view.defPosition("1i", 20, 140, 40, 40);
    view.defPosition("12j", 460, 100, 40, 40);
    view.defPosition("11j", 420, 100, 40, 40);
    view.defPosition("10j", 380, 100, 40, 40);
    view.defPosition("9j", 340, 100, 40, 40);
    view.defPosition("8j", 300, 100, 40, 40);
    view.defPosition("7j", 260, 100, 40, 40);
    view.defPosition("6j", 220, 100, 40, 40);
    view.defPosition("5j", 180, 100, 40, 40);
    view.defPosition("4j", 140, 100, 40, 40);
    view.defPosition("3j", 100, 100, 40, 40);
    view.defPosition("2j", 60, 100, 40, 40);
    view.defPosition("1j", 20, 100, 40, 40);
    view.defPosition("12k", 460, 60, 40, 40);
    view.defPosition("11k", 420, 60, 40, 40);
    view.defPosition("10k", 380, 60, 40, 40);
    view.defPosition("9k", 340, 60, 40, 40);
    view.defPosition("8k", 300, 60, 40, 40);
    view.defPosition("7k", 260, 60, 40, 40);
    view.defPosition("6k", 220, 60, 40, 40);
    view.defPosition("5k", 180, 60, 40, 40);
    view.defPosition("4k", 140, 60, 40, 40);
    view.defPosition("3k", 100, 60, 40, 40);
    view.defPosition("2k", 60, 60, 40, 40);
    view.defPosition("1k", 20, 60, 40, 40);
    view.defPosition("12l", 460, 20, 40, 40);
    view.defPosition("11l", 420, 20, 40, 40);
    view.defPosition("10l", 380, 20, 40, 40);
    view.defPosition("9l", 340, 20, 40, 40);
    view.defPosition("8l", 300, 20, 40, 40);
    view.defPosition("7l", 260, 20, 40, 40);
    view.defPosition("6l", 220, 20, 40, 40);
    view.defPosition("5l", 180, 20, 40, 40);
    view.defPosition("4l", 140, 20, 40, 40);
    view.defPosition("3l", 100, 20, 40, 40);
    view.defPosition("2l", 60, 20, 40, 40);
    view.defPosition("1l", 20, 20, 40, 40);
}
