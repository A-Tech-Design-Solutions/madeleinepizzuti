import React from "react";
import "./AboutStyling.css";
import YouTubePlayer from "react-player";
import madeleine from "../../Images/madeleine-pic.jpg";
import madeleinejeremy from "../../Images/madeleineandjeremy.jpg";

const About = () => {
	return (
		<div>
			<div className="aboutContent">
				<div className="aboutLeftContent">
					<img src={madeleine} />
					<YouTubePlayer url="https://www.youtube.com/watch?v=D6I0uHECG-k" />
				</div>
				<div className="aboutRightContent">
					<p>
						The reason for writing my first book – “Tell Me a Story” came from
						the need to leave something behind for my grandchildren. I wanted
						them to know the person that I am – to have some knowledge of how
						their ‘Nanny’ lived as a young child in England and how it differs
						from their own childhood.
					</p>

					<p>
						Growing up in England and living in the small Fenland village of
						Leverington for eighteen years of my life created for me a myriad of
						memories – some sad, but most of them very happy. I was born in the
						Fenland capital of Wisbech, Cambridgeshire, and lived in a house
						that my father built. It was there that I enjoyed an idyllic
						childhood within the safe and warm embrace of my loving family, good
						friends and a large and lovable extended family.
					</p>

					<p>
						Tell Me A Story… is a selection of stories drawn from my childhood
						memories – from my grandmother’s infamous jelly cubes to garden
						forks that go awry. From donkey rides to teenage crushes and a
						drummer boy that would make you smile. Set between the mid 1950s to
						1970s, this memoir would appeal to adults and young adults alike;
						particularly those familiar with the Fenland district.
					</p>
				</div>
			</div>
			<div className="aboutContent">
				<div className="aboutLeftContent">
					<img src={madeleinejeremy} />
					<h4 style={{ textAlign: "center" }}>
						Madeleine with Jeremy Sallis of BBC Radio Cambridgeshire
					</h4>
				</div>
				<div className="aboutRightContent">
					<p>
						I was born in the market town of Wisbech, Cambridgeshire, England in
						1953. My parents had met during the war in Egypt where my mother
						lived. When the war was over and after a lengthy engagement, they
						married and settled in the village of Leverington, near Wisbech,
						which is where my brother and myself grew up.
					</p>

					<p>
						My childhood, growing up in the Fenland district of England, was
						packed with fun and adventure, and yet at the same time, we were
						surrounded by the warmth and security of our loving parents. We
						always knew there was a safe haven to come home to at the end of
						each day.
					</p>

					<p>
						In September 1972, at the age of eighteen, I left the security of my
						family in search of more adventure, and emigrated to Sydney,
						Australia, where I have lived now for 43 years.
					</p>

					<p>
						I have always had a love for writing and my plan, upon arriving in
						Australia, was to pursue a career in journalism. However, this was
						not to be – instead I followed the path of secretarial work for many
						years before marrying and having three sons.
					</p>

					<p>
						When my youngest son started school I went back into the workforce
						as a Teacher’s Aide (Special Needs) and stayed in that line of work
						for 13 years.The transition from being a Teacher’s aide in the
						Catholic School System to becoming a Pastoral Associate in the
						Catholic Church, which is where I have been employed for the past 12
						years, was relatively smooth – it was a position I had been
						preparing for over the years, and I enjoy it immensely.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
