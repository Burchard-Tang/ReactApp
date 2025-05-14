import commonGambleImg from '../images/commonLootBox.jpg';
import rareGambleImg from '../images/superLootBox.jpg';
import superGambleImg from '../images/Golden_Loot_Box.webp';

const Gambling = () =>
(
    <>
        <h1 class="pageTitle">Gambling</h1>
        <p class="pageText">Available lootboxes:</p>

        <ul class="alignImages">
            <li>
                <li class="alignedText"><h3>Common Loot Box</h3></li>
                <img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/>
                <li class="alignedText"><h5>150 Study Score</h5></li>
            </li>
            <li>
                <li class="alignedText"><h3>Rare Loot Box</h3></li>
                <img src={rareGambleImg} alt="rare loot box" class="lootImages" id="rareLootBox"/>
                <li class="alignedText"><h5>300 Study Score</h5></li>
            </li>
            <li>
                <li class="alignedText"><h3>Super Loot Box</h3></li>
                <img src={superGambleImg} alt="super loot box" class="lootImages" id="superLootBox"/>
                <li class="alignedText"><h5>500 Study Score</h5></li>
            </li>

        </ul>
    </>
)

export default Gambling;