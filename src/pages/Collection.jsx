import { useState } from "react";
import commonGambleImg from '../images/commonLootBox.jpg';

const Collection = () => {
    return(
        <>
        <h1 class="pageTitle">Your Collection:</h1>

        <ul class="alignImages2">
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
        </ul>
        <ul class="alignImages2">
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
        </ul>
        <ul class="alignImages2">
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
            <li><img src={commonGambleImg} alt="common loot box" class="lootImages" id="commonLootBox"/></li>
        </ul>

        </>
    );
}


export default Collection;