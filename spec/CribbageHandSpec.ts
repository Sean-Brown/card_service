import * as expect from 'expect';
import {
    aceOfClubs,
    aceOfDiamonds,
    aceOfHearts,
    aceOfSpades,
    eightOfClubs,
    eightOfDiamonds,
    eightOfHearts,
    eightOfSpades,
    fiveOfClubs,
    fiveOfDiamonds,
    fiveOfHearts,
    fourOfClubs,
    fourOfDiamonds,
    fourOfHearts,
    fourOfSpades,
    jackOfClubs,
    jackOfHearts,
    jackOfSpades,
    kingOfHearts,
    nineOfClubs,
    nineOfDiamonds,
    queenOfSpades,
    sevenOfSpades,
    sixOfSpades,
    tenOfClubs,
    tenOfDiamonds,
    tenOfSpades,
    threeOfDiamonds,
    threeOfHearts,
    threeOfSpades,
    twoOfClubs,
    twoOfDiamonds,
    twoOfHearts,
    twoOfSpades,
} from './StandardCards';
import { CribbageHand } from '../implementations/cribbage_hand';

describe('Test a Cribbage game between two playerIDs', function() {
    beforeEach(function() {});
    describe('Test letious counting scenarios', function() {
        it('counts correctly', function() {
            const hand = new CribbageHand([
                aceOfClubs,
                fourOfHearts,
                eightOfClubs,
                eightOfHearts,
            ]);
            expect(hand.countPoints(queenOfSpades, false)).toEqual(4); // 15 for two points and a pair makes four points
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                aceOfDiamonds,
                aceOfSpades,
                sixOfSpades,
                tenOfDiamonds,
            ]);
            expect(hand.countPoints(queenOfSpades, false)).toEqual(2); // 2 points for a pair of aces
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                aceOfClubs,
                fourOfHearts,
                tenOfDiamonds,
                tenOfClubs,
            ]);
            expect(hand.countPoints(fourOfSpades, false)).toEqual(12); // 15 for eight points and two pairs makes twelve points
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                twoOfClubs,
                threeOfSpades,
                threeOfHearts,
                jackOfHearts,
            ]);
            expect(hand.countPoints(fourOfSpades, false)).toEqual(12); // 15 for four points and a double run of three makes 12 points
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                aceOfClubs,
                aceOfDiamonds,
                aceOfHearts,
                fourOfClubs,
            ]);
            expect(hand.countPoints(fourOfSpades, false)).toEqual(8); // 6 for 3 of a kind and a pair makes eight points
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                aceOfClubs,
                twoOfClubs,
                threeOfHearts,
                tenOfDiamonds,
            ]);
            expect(hand.countPoints(jackOfHearts, false)).toEqual(7); // 15 for four points and a run of three makes seven points
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                twoOfClubs,
                threeOfSpades,
                threeOfHearts,
                jackOfSpades,
            ]);
            expect(hand.countPoints(jackOfHearts, false)).toEqual(12); // 15 for eight points and a two pair makes 12 points
        });
        it('counts with the right-jack correctly', function() {
            const hand = new CribbageHand([
                twoOfClubs,
                threeOfSpades,
                threeOfHearts,
                jackOfSpades,
            ]);
            expect(hand.countPoints(queenOfSpades, false)).toEqual(11); // 15 for eight points + a pair + right jack makes 11 points
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                eightOfDiamonds,
                jackOfClubs,
                queenOfSpades,
                kingOfHearts,
            ]);
            expect(hand.countPoints(eightOfClubs, true)).toEqual(6); // A pair + a run of 3 + right jack makes 6 points
        });
        it('counts four-of-a-kinds correctly', function() {
            const hand = new CribbageHand([
                twoOfClubs,
                twoOfDiamonds,
                twoOfHearts,
                twoOfSpades,
            ]);
            expect(hand.countPoints(fourOfHearts, true)).toEqual(12); // A pair + a run of 3 + right jack makes 6 points
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                threeOfDiamonds,
                fourOfDiamonds,
                fiveOfDiamonds,
                sevenOfSpades,
            ]);
            expect(hand.countPoints(nineOfDiamonds, false)).toEqual(5); // A 15-2 and a run of 3 makes 5
        });
        it('counts double-doubles correctly', function() {
            const hand = new CribbageHand([
                eightOfClubs,
                eightOfHearts,
                nineOfDiamonds,
                nineOfClubs,
            ]);
            expect(hand.countPoints(tenOfSpades, false)).toEqual(16); // A double-double is 16 points
        });
        it('counts triple runs of 3 correctly', function() {
            const hand = new CribbageHand([
                eightOfClubs,
                eightOfHearts,
                eightOfSpades,
                nineOfClubs,
            ]);
            expect(hand.countPoints(tenOfSpades, false)).toEqual(15); // A 15-2 and a run of 3 makes 5
        });
        it('counts correctly', function() {
            const hand = new CribbageHand([
                twoOfHearts,
                threeOfDiamonds,
                fourOfClubs,
                fiveOfClubs,
            ]);
            expect(hand.countPoints(fourOfDiamonds, false)).toEqual(12); // A 15-2 and a double run of of 3 makes 12
        });
    });
});
