import React,{Component} from "react"
import ArtDisplay from "./ArtDisplay"
import {DisplayData} from "./DisplayData"

import "../css/Autoglyphs.scss"

export default class Autoglyphs extends Component{
    render(){
        return(
            <div className="container">
                <div className="block1">
                    <input className="blockchain-btn" type="button" value="Blockchain"/>
                    <h1>Autoglyphs</h1>
                    <p>Autoglyphs are the first “on-chain” generative art on the Ethereum blockchain. They are a completely self-contained mechanism for the creation and ownership of an artwork.</p>
                </div>
                
                <div className="block2">
                    <ArtDisplay arts={DisplayData} mindisplay={4} maxdisplay={4} displaynum='8'/>
                </div>
                
                <div className="block3">
                    <p>Autoglyphs are an experiment in generative art, each one unique and created by code running on the Ethereum blockchain. A glyph can be created by anyone who is willing to donate the creation fee of 0.20Ξ ($401) to our chosen charity, 350.org. The creator of the glyph will then also become the first owner of the glyph. However, after 512 glyphs have been created, the generator will shut itself off forever and the glyphs will only be available on the secondary market.
                    Now that we have deployed the project to Ethereum, it is important to note that we no longer control the code that generates the art, nor the code that manages the ownership of the glyphs. This is a crucial difference from art that is editioned and sold by an artist or gallery. It allows a long-term guarantee of ownership, provenance and edition size that is independent of any central authority.</p>
                    <h3>Technical Details</h3>
                    <p>The Autoglyphs are a highly optimized generative algorithm capable of creating billions of unique artworks, wrapped inside an ERC-721 interface. While ERC-721 is the standard for “non-fungible tokens” (something that the CryptoPunks helped define), it is generally used to manage ownership of digital items stored elsewhere. The key difference with the Autoglyphs is that the art is inside the contract itself, it is literally “art on the blockchain.”
                    This becomes obvious if you examine any glpyh creation transaction on the blockchain. The event data contains the full output of the generator, and hence the artwork itself. See here for an example. It doesn't look like much as hex data, but it encodes a character art pattern. This pattern can then be drawn to a screen or even on paper by following the written instructions in the comments of the smart contract itself.</p>
                    <h3>The Creation Fee Goes to Charity</h3>
                    <p>All proceeds from the creation of Autoglyphs are being donated to 350.org, an organization founded to combat climate change. A cool thing about the blockchain is that you can verify that we are in fact donating the money. 350.org accepts Ethereum donations, and their address (0x50990F09d4) can be verified on this page of their website. You can also verify that the Autoglyphs contract is donating the full creation fee of 0.20Ξ ($401) to that address upon the creation of each glyph. For example, here is the donation for glyph #129. So for each Autoglyph you create for yourself, you're also easily and transparently donating to a good cause.</p>
                </div>

                <div className="block4">
                    <h3>Get Your Own Autoglpyh</h3>
                    <p>Each Autoglpyh is unique and created for it's purchaser by the algorithm embedded in the Ethereum blockchain. There will only ever be 512 in existance, and 512 have already been claimed. That means there are 0 left to be created.</p>
                    <div className="table">
                        <div className="cell">
                            <p>Donation Required to Create<span>
                            0.20Ξ ($401)</span></p>
                        </div>
                        <div className="cell">
                            <p>Number Created so Far<span>
                            512</span></p>
                        </div>
                        <div className="cell">
                            <p>Number Available to Create<span>
                            0</span></p>
                        </div>
                    </div>
                    <p>All 512 Autoglyphs have now been created, to acquire an Autoglyph you will need to acquire them on the secondary market.</p>
                    <input type="button" value="View secondary market on Opensea"/>
                    <input type="button" value="View All Autoglyph Owners"/>
                </div>
                <div className="block5">
                    <h3>Current Project Status</h3>
                    <p>The complete set of glyphs generated to date can be seen below along with some key stats about the project so far.</p>
                    <div className="table">
                        <div className="cell">
                            <p>Number Created so Far<span>
                            512</span></p>
                        </div>
                        <div className="cell">
                            <p>Number Available to Create
                            <span>0</span></p>
                        </div>
                    </div>
                </div>
                <div className="block6">
                    <ArtDisplay arts={DisplayData} mindisplay={4} maxdisplay={4} displaynum='20'/>
                </div>
            </div>
        )
        
    }
}