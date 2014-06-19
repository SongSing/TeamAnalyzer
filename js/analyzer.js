// my body is ready //

String.prototype.rightJustify = function(len, fill)
{
	if (len <= this.length)
	{
		return this;
	}
		
	var ret = this;
	
	for (var i = 0; i < len - this.length; i++)
	{
		ret = fill + ret;
	}
	
	return ret;
};

String.prototype.leftJustify = function(len, fill)
{
	var ret = this;
	
	for (var i = 0; i < len - this.length; i++)
	{
		ret += fill;
	}
	
	return ret;
};

String.prototype.args = function()
{
	var arg = arguments;
	
	var ret = this;
	
	ret = ret.replace(/(%[0-9]+)/g, "($1)"); // for %10 and %294054839 etc
	
	for (var i = 0; i < arg.length; i++)
	{	
		ret = ret.replace(new RegExp("\\(%" + (i + 1) + "\\)", "g"), arg[i].toString()); // is toString necessary?? What's javascript?!?!?
	}
	
	return ret;
};

Array.prototype.sum = function()
{
	var ret = 0;
	
	for (var i = 0; i < this.length; i++)
	{
		ret += this[i];
	}
	
	return ret;
};

Array.prototype.count = function(val)
{
	var ret = 0;
	
	for (var i = 0; i < this.length; i++)
	{
		if (this[i] === val)
			ret++;
	}
	
	return ret;
};

Array.prototype.averaged = function()
{
	var total = 0;
	
	for (var i = 0; i < this.length; i++)
	{
		total += this[i];
	}
	
	return total / this.length;
};

Array.prototype.combinedWith = function(arr)
{
	var ret = [];
	
	
	for (var i = 0; i < this.length; i++)
	{
		ret.push([this[i], arr[i]]);
	}
	
	return ret;
};

Array.prototype.inverted = function(max)
{
	var ret = [];
	
	for (var i = 0; i < this.length; i++)
	{
		ret.push(max - this[i]);
	}
	
	return ret;
};

Array.prototype.averagedWith = function(arr)
{
	var ret = [];
	var barr = (this.length > arr.length ? this : arr);
	var larr = (this.length > arr.length ? arr : this);
	
	for (var i = 0; i < larr.length; i++)
	{
		ret.push((parseFloat(larr[i]) + parseFloat(barr[i])) / 2)
	}
	for (var i = larr.length; i < barr.length; i++)
	{
		ret.push(barr[i]);
	}
	
	return ret;
};

Array.prototype.pieces = function(indexes)
{
	var ret = [];
	
	for (var i = 0; i < indexes.length; i++)
	{
		ret.push(this[indexes[i]]);
	}
	
	return ret;
};

Array.prototype.copy = function()
{
	return this.slice(0);
};

Array.prototype.remove = function(val)
{
	this.removeAt(this.indexOf(val));
};

Array.prototype.removeAt = function(index)
{
	this.splice(index, 1);
};

Array.prototype.format = function(fn)
{
	var ret = [];
	
	for (var i = 0; i < this.length; i++)
	{
		if (typeof(this[i]) === "string")
			ret.push(eval('"' + fn.replace(/%i/g, this[i]) + '"'));
		else
			ret.push(eval(fn.replace(/%i/g, this[i])));
	}
	
	return ret;
};

function jsonToArray(json)
{
	var ret = [];
	
	for (var x in json)
	{
		if (json.hasOwnProperty(x))
		{
			ret.push(json[x]);
		}
	}
	
	return ret;
}

function getJSON(file) // stolen from sulcata copyright 2014 sulcata
{
    var httpreq;
	
    try
	{
        httpreq = new XMLHttpRequest(); // normal browsers
    }
	catch (e)
	{
        try 
		{
            httpreq = new ActiveXObject("Msxml2.XMLHTTP"); // old version of ie
        } 
		catch (f)
		{
            try 
			{
                httpreq = new ActiveXObject("Microsoft.XMLHTTP"); // really, reeaaally old ie
            }
			catch (g)
			{
                alert("Nice potato!"); // compliment their potato
            }
        }
    }
	
    httpreq.open("GET", file, false);
    httpreq.send();
    return JSON.parse(httpreq.responseText);
}

var __moves = {"(No Move)":{"num":0,"type":18,"damageClass":0},"Pound":{"num":1,"type":0,"damageClass":1},"Karate Chop":{"num":2,"type":1,"damageClass":1},"Double Slap":{"num":3,"type":0,"damageClass":1},"Comet Punch":{"num":4,"type":0,"damageClass":1},"Mega Punch":{"num":5,"type":0,"damageClass":1},"Pay Day":{"num":6,"type":0,"damageClass":1},"Fire Punch":{"num":7,"type":9,"damageClass":1},"Ice Punch":{"num":8,"type":14,"damageClass":1},"Thunder Punch":{"num":9,"type":12,"damageClass":1},"Scratch":{"num":10,"type":0,"damageClass":1},"Vice Grip":{"num":11,"type":0,"damageClass":1},"Guillotine":{"num":12,"type":0,"damageClass":1},"Razor Wind":{"num":13,"type":0,"damageClass":2},"Swords Dance":{"num":14,"type":0,"damageClass":0},"Cut":{"num":15,"type":0,"damageClass":1},"Gust":{"num":16,"type":2,"damageClass":2},"Wing Attack":{"num":17,"type":2,"damageClass":1},"Whirlwind":{"num":18,"type":0,"damageClass":0},"Fly":{"num":19,"type":2,"damageClass":1},"Bind":{"num":20,"type":0,"damageClass":1},"Slam":{"num":21,"type":0,"damageClass":1},"Vine Whip":{"num":22,"type":11,"damageClass":1},"Stomp":{"num":23,"type":0,"damageClass":1},"Double Kick":{"num":24,"type":1,"damageClass":1},"Mega Kick":{"num":25,"type":0,"damageClass":1},"Jump Kick":{"num":26,"type":1,"damageClass":1},"Rolling Kick":{"num":27,"type":1,"damageClass":1},"Sand Attack":{"num":28,"type":4,"damageClass":0},"Headbutt":{"num":29,"type":0,"damageClass":1},"Horn Attack":{"num":30,"type":0,"damageClass":1},"Fury Attack":{"num":31,"type":0,"damageClass":1},"Horn Drill":{"num":32,"type":0,"damageClass":1},"Tackle":{"num":33,"type":0,"damageClass":1},"Body Slam":{"num":34,"type":0,"damageClass":1},"Wrap":{"num":35,"type":0,"damageClass":1},"Take Down":{"num":36,"type":0,"damageClass":1},"Thrash":{"num":37,"type":0,"damageClass":1},"Double-Edge":{"num":38,"type":0,"damageClass":1},"Tail Whip":{"num":39,"type":0,"damageClass":0},"Poison Sting":{"num":40,"type":3,"damageClass":1},"Twineedle":{"num":41,"type":6,"damageClass":1},"Pin Missile":{"num":42,"type":6,"damageClass":1},"Leer":{"num":43,"type":0,"damageClass":0},"Bite":{"num":44,"type":16,"damageClass":1},"Growl":{"num":45,"type":0,"damageClass":0},"Roar":{"num":46,"type":0,"damageClass":0},"Sing":{"num":47,"type":0,"damageClass":0},"Supersonic":{"num":48,"type":0,"damageClass":0},"Sonic Boom":{"num":49,"type":0,"damageClass":2},"Disable":{"num":50,"type":0,"damageClass":0},"Acid":{"num":51,"type":3,"damageClass":2},"Ember":{"num":52,"type":9,"damageClass":2},"Flamethrower":{"num":53,"type":9,"damageClass":2},"Mist":{"num":54,"type":14,"damageClass":0},"Water Gun":{"num":55,"type":10,"damageClass":2},"Hydro Pump":{"num":56,"type":10,"damageClass":2},"Surf":{"num":57,"type":10,"damageClass":2},"Ice Beam":{"num":58,"type":14,"damageClass":2},"Blizzard":{"num":59,"type":14,"damageClass":2},"Psybeam":{"num":60,"type":13,"damageClass":2},"Bubble Beam":{"num":61,"type":10,"damageClass":2},"Aurora Beam":{"num":62,"type":14,"damageClass":2},"Hyper Beam":{"num":63,"type":0,"damageClass":2},"Peck":{"num":64,"type":2,"damageClass":1},"Drill Peck":{"num":65,"type":2,"damageClass":1},"Submission":{"num":66,"type":1,"damageClass":1},"Low Kick":{"num":67,"type":1,"damageClass":1},"Counter":{"num":68,"type":1,"damageClass":1},"Seismic Toss":{"num":69,"type":1,"damageClass":1},"Strength":{"num":70,"type":0,"damageClass":1},"Absorb":{"num":71,"type":11,"damageClass":2},"Mega Drain":{"num":72,"type":11,"damageClass":2},"Leech Seed":{"num":73,"type":11,"damageClass":0},"Growth":{"num":74,"type":0,"damageClass":0},"Razor Leaf":{"num":75,"type":11,"damageClass":1},"Solar Beam":{"num":76,"type":11,"damageClass":2},"Poison Powder":{"num":77,"type":3,"damageClass":0},"Stun Spore":{"num":78,"type":11,"damageClass":0},"Sleep Powder":{"num":79,"type":11,"damageClass":0},"Petal Dance":{"num":80,"type":11,"damageClass":2},"String Shot":{"num":81,"type":6,"damageClass":0},"Dragon Rage":{"num":82,"type":15,"damageClass":2},"Fire Spin":{"num":83,"type":9,"damageClass":2},"Thunder Shock":{"num":84,"type":12,"damageClass":2},"Thunderbolt":{"num":85,"type":12,"damageClass":2},"Thunder Wave":{"num":86,"type":12,"damageClass":0},"Thunder":{"num":87,"type":12,"damageClass":2},"Rock Throw":{"num":88,"type":5,"damageClass":1},"Earthquake":{"num":89,"type":4,"damageClass":1},"Fissure":{"num":90,"type":4,"damageClass":1},"Dig":{"num":91,"type":4,"damageClass":1},"Toxic":{"num":92,"type":3,"damageClass":0},"Confusion":{"num":93,"type":13,"damageClass":2},"Psychic":{"num":94,"type":13,"damageClass":2},"Hypnosis":{"num":95,"type":13,"damageClass":0},"Meditate":{"num":96,"type":13,"damageClass":0},"Agility":{"num":97,"type":13,"damageClass":0},"Quick Attack":{"num":98,"type":0,"damageClass":1},"Rage":{"num":99,"type":0,"damageClass":1},"Teleport":{"num":100,"type":13,"damageClass":0},"Night Shade":{"num":101,"type":7,"damageClass":2},"Mimic":{"num":102,"type":0,"damageClass":0},"Screech":{"num":103,"type":0,"damageClass":0},"Double Team":{"num":104,"type":0,"damageClass":0},"Recover":{"num":105,"type":0,"damageClass":0},"Harden":{"num":106,"type":0,"damageClass":0},"Minimize":{"num":107,"type":0,"damageClass":0},"Smokescreen":{"num":108,"type":0,"damageClass":0},"Confuse Ray":{"num":109,"type":7,"damageClass":0},"Withdraw":{"num":110,"type":10,"damageClass":0},"Defense Curl":{"num":111,"type":0,"damageClass":0},"Barrier":{"num":112,"type":13,"damageClass":0},"Light Screen":{"num":113,"type":13,"damageClass":0},"Haze":{"num":114,"type":14,"damageClass":0},"Reflect":{"num":115,"type":13,"damageClass":0},"Focus Energy":{"num":116,"type":0,"damageClass":0},"Bide":{"num":117,"type":0,"damageClass":1},"Metronome":{"num":118,"type":0,"damageClass":0},"Mirror Move":{"num":119,"type":2,"damageClass":0},"Self-Destruct":{"num":120,"type":0,"damageClass":1},"Egg Bomb":{"num":121,"type":0,"damageClass":1},"Lick":{"num":122,"type":7,"damageClass":1},"Smog":{"num":123,"type":3,"damageClass":2},"Sludge":{"num":124,"type":3,"damageClass":2},"Bone Club":{"num":125,"type":4,"damageClass":1},"Fire Blast":{"num":126,"type":9,"damageClass":2},"Waterfall":{"num":127,"type":10,"damageClass":1},"Clamp":{"num":128,"type":10,"damageClass":1},"Swift":{"num":129,"type":0,"damageClass":2},"Skull Bash":{"num":130,"type":0,"damageClass":1},"Spike Cannon":{"num":131,"type":0,"damageClass":1},"Constrict":{"num":132,"type":0,"damageClass":1},"Amnesia":{"num":133,"type":13,"damageClass":0},"Kinesis":{"num":134,"type":13,"damageClass":0},"Soft-Boiled":{"num":135,"type":0,"damageClass":0},"High Jump Kick":{"num":136,"type":1,"damageClass":1},"Glare":{"num":137,"type":0,"damageClass":0},"Dream Eater":{"num":138,"type":13,"damageClass":2},"Poison Gas":{"num":139,"type":3,"damageClass":0},"Barrage":{"num":140,"type":0,"damageClass":1},"Leech Life":{"num":141,"type":6,"damageClass":1},"Lovely Kiss":{"num":142,"type":0,"damageClass":0},"Sky Attack":{"num":143,"type":2,"damageClass":1},"Transform":{"num":144,"type":0,"damageClass":0},"Bubble":{"num":145,"type":10,"damageClass":2},"Dizzy Punch":{"num":146,"type":0,"damageClass":1},"Spore":{"num":147,"type":11,"damageClass":0},"Flash":{"num":148,"type":0,"damageClass":0},"Psywave":{"num":149,"type":13,"damageClass":2},"Splash":{"num":150,"type":0,"damageClass":0},"Acid Armor":{"num":151,"type":3,"damageClass":0},"Crabhammer":{"num":152,"type":10,"damageClass":1},"Explosion":{"num":153,"type":0,"damageClass":1},"Fury Swipes":{"num":154,"type":0,"damageClass":1},"Bonemerang":{"num":155,"type":4,"damageClass":1},"Rest":{"num":156,"type":13,"damageClass":0},"Rock Slide":{"num":157,"type":5,"damageClass":1},"Hyper Fang":{"num":158,"type":0,"damageClass":1},"Sharpen":{"num":159,"type":0,"damageClass":0},"Conversion":{"num":160,"type":0,"damageClass":0},"Tri Attack":{"num":161,"type":0,"damageClass":2},"Super Fang":{"num":162,"type":0,"damageClass":1},"Slash":{"num":163,"type":0,"damageClass":1},"Substitute":{"num":164,"type":0,"damageClass":0},"Struggle":{"num":165,"type":18,"damageClass":1},"Sketch":{"num":166,"type":0,"damageClass":0},"Triple Kick":{"num":167,"type":1,"damageClass":1},"Thief":{"num":168,"type":16,"damageClass":1},"Spider Web":{"num":169,"type":6,"damageClass":0},"Mind Reader":{"num":170,"type":0,"damageClass":0},"Nightmare":{"num":171,"type":7,"damageClass":0},"Flame Wheel":{"num":172,"type":9,"damageClass":1},"Snore":{"num":173,"type":0,"damageClass":2},"Curse":{"num":174,"type":7,"damageClass":0},"Flail":{"num":175,"type":0,"damageClass":1},"Conversion 2":{"num":176,"type":0,"damageClass":0},"Aeroblast":{"num":177,"type":2,"damageClass":2},"Cotton Spore":{"num":178,"type":11,"damageClass":0},"Reversal":{"num":179,"type":1,"damageClass":1},"Spite":{"num":180,"type":7,"damageClass":0},"Powder Snow":{"num":181,"type":14,"damageClass":2},"Protect":{"num":182,"type":0,"damageClass":0},"Mach Punch":{"num":183,"type":1,"damageClass":1},"Scary Face":{"num":184,"type":0,"damageClass":0},"Feint Attack":{"num":185,"type":16,"damageClass":1},"Sweet Kiss":{"num":186,"type":17,"damageClass":0},"Belly Drum":{"num":187,"type":0,"damageClass":0},"Sludge Bomb":{"num":188,"type":3,"damageClass":2},"Mud-Slap":{"num":189,"type":4,"damageClass":2},"Octazooka":{"num":190,"type":10,"damageClass":2},"Spikes":{"num":191,"type":4,"damageClass":0},"Zap Cannon":{"num":192,"type":12,"damageClass":2},"Foresight":{"num":193,"type":0,"damageClass":0},"Destiny Bond":{"num":194,"type":7,"damageClass":0},"Perish Song":{"num":195,"type":0,"damageClass":0},"Icy Wind":{"num":196,"type":14,"damageClass":2},"Detect":{"num":197,"type":1,"damageClass":0},"Bone Rush":{"num":198,"type":4,"damageClass":1},"Lock-On":{"num":199,"type":0,"damageClass":0},"Outrage":{"num":200,"type":15,"damageClass":1},"Sandstorm":{"num":201,"type":5,"damageClass":0},"Giga Drain":{"num":202,"type":11,"damageClass":2},"Endure":{"num":203,"type":0,"damageClass":0},"Charm":{"num":204,"type":17,"damageClass":0},"Rollout":{"num":205,"type":5,"damageClass":1},"False Swipe":{"num":206,"type":0,"damageClass":1},"Swagger":{"num":207,"type":0,"damageClass":0},"Milk Drink":{"num":208,"type":0,"damageClass":0},"Spark":{"num":209,"type":12,"damageClass":1},"Fury Cutter":{"num":210,"type":6,"damageClass":1},"Steel Wing":{"num":211,"type":8,"damageClass":1},"Mean Look":{"num":212,"type":0,"damageClass":0},"Attract":{"num":213,"type":0,"damageClass":0},"Sleep Talk":{"num":214,"type":0,"damageClass":0},"Heal Bell":{"num":215,"type":0,"damageClass":0},"Return":{"num":216,"type":0,"damageClass":1},"Present":{"num":217,"type":0,"damageClass":1},"Frustration":{"num":218,"type":0,"damageClass":1},"Safeguard":{"num":219,"type":0,"damageClass":0},"Pain Split":{"num":220,"type":0,"damageClass":0},"Sacred Fire":{"num":221,"type":9,"damageClass":1},"Magnitude":{"num":222,"type":4,"damageClass":1},"Dynamic Punch":{"num":223,"type":1,"damageClass":1},"Megahorn":{"num":224,"type":6,"damageClass":1},"Dragon Breath":{"num":225,"type":15,"damageClass":2},"Baton Pass":{"num":226,"type":0,"damageClass":0},"Encore":{"num":227,"type":0,"damageClass":0},"Pursuit":{"num":228,"type":16,"damageClass":1},"Rapid Spin":{"num":229,"type":0,"damageClass":1},"Sweet Scent":{"num":230,"type":0,"damageClass":0},"Iron Tail":{"num":231,"type":8,"damageClass":1},"Metal Claw":{"num":232,"type":8,"damageClass":1},"Vital Throw":{"num":233,"type":1,"damageClass":1},"Morning Sun":{"num":234,"type":0,"damageClass":0},"Synthesis":{"num":235,"type":11,"damageClass":0},"Moonlight":{"num":236,"type":17,"damageClass":0},"Hidden Power":{"num":237,"type":0,"damageClass":2},"Hidden Power [Fighting]":{"num":237,"type":1,"damageClass":2},"Hidden Power [Flying]":{"num":237,"type":2,"damageClass":2},"Hidden Power [Poison]":{"num":237,"type":3,"damageClass":2},"Hidden Power [Ground]":{"num":237,"type":4,"damageClass":2},"Hidden Power [Rock]":{"num":237,"type":5,"damageClass":2},"Hidden Power [Bug]":{"num":237,"type":6,"damageClass":2},"Hidden Power [Ghost]":{"num":237,"type":7,"damageClass":2},"Hidden Power [Steel]":{"num":237,"type":8,"damageClass":2},"Hidden Power [Fire]":{"num":237,"type":9,"damageClass":2},"Hidden Power [Water]":{"num":237,"type":10,"damageClass":2},"Hidden Power [Grass]":{"num":237,"type":11,"damageClass":2},"Hidden Power [Electric]":{"num":237,"type":12,"damageClass":2},"Hidden Power [Psychic]":{"num":237,"type":13,"damageClass":2},"Hidden Power [Ice]":{"num":237,"type":14,"damageClass":2},"Hidden Power [Dragon]":{"num":237,"type":15,"damageClass":2},"Hidden Power [Dark]":{"num":237,"type":16,"damageClass":2},"Hidden Power [Fairy]":{"num":237,"type":17,"damageClass":2},"Cross Chop":{"num":238,"type":1,"damageClass":1},"Twister":{"num":239,"type":15,"damageClass":2},"Rain Dance":{"num":240,"type":10,"damageClass":0},"Sunny Day":{"num":241,"type":9,"damageClass":0},"Crunch":{"num":242,"type":16,"damageClass":1},"Mirror Coat":{"num":243,"type":13,"damageClass":2},"Psych Up":{"num":244,"type":0,"damageClass":0},"Extreme Speed":{"num":245,"type":0,"damageClass":1},"Ancient Power":{"num":246,"type":5,"damageClass":2},"Shadow Ball":{"num":247,"type":7,"damageClass":2},"Future Sight":{"num":248,"type":13,"damageClass":2},"Rock Smash":{"num":249,"type":1,"damageClass":1},"Whirlpool":{"num":250,"type":10,"damageClass":2},"Beat Up":{"num":251,"type":16,"damageClass":1},"Fake Out":{"num":252,"type":0,"damageClass":1},"Uproar":{"num":253,"type":0,"damageClass":2},"Stockpile":{"num":254,"type":0,"damageClass":0},"Spit Up":{"num":255,"type":0,"damageClass":2},"Swallow":{"num":256,"type":0,"damageClass":0},"Heat Wave":{"num":257,"type":9,"damageClass":2},"Hail":{"num":258,"type":14,"damageClass":0},"Torment":{"num":259,"type":16,"damageClass":0},"Flatter":{"num":260,"type":16,"damageClass":0},"Will-O-Wisp":{"num":261,"type":9,"damageClass":0},"Memento":{"num":262,"type":16,"damageClass":0},"Facade":{"num":263,"type":0,"damageClass":1},"Focus Punch":{"num":264,"type":1,"damageClass":1},"Smelling Salts":{"num":265,"type":0,"damageClass":1},"Follow Me":{"num":266,"type":0,"damageClass":0},"Nature Power":{"num":267,"type":0,"damageClass":0},"Charge":{"num":268,"type":12,"damageClass":0},"Taunt":{"num":269,"type":16,"damageClass":0},"Helping Hand":{"num":270,"type":0,"damageClass":0},"Trick":{"num":271,"type":13,"damageClass":0},"Role Play":{"num":272,"type":13,"damageClass":0},"Wish":{"num":273,"type":0,"damageClass":0},"Assist":{"num":274,"type":0,"damageClass":0},"Ingrain":{"num":275,"type":11,"damageClass":0},"Superpower":{"num":276,"type":1,"damageClass":1},"Magic Coat":{"num":277,"type":13,"damageClass":0},"Recycle":{"num":278,"type":0,"damageClass":0},"Revenge":{"num":279,"type":1,"damageClass":1},"Brick Break":{"num":280,"type":1,"damageClass":1},"Yawn":{"num":281,"type":0,"damageClass":0},"Knock Off":{"num":282,"type":16,"damageClass":1},"Endeavor":{"num":283,"type":0,"damageClass":1},"Eruption":{"num":284,"type":9,"damageClass":2},"Skill Swap":{"num":285,"type":13,"damageClass":0},"Imprison":{"num":286,"type":13,"damageClass":0},"Refresh":{"num":287,"type":0,"damageClass":0},"Grudge":{"num":288,"type":7,"damageClass":0},"Snatch":{"num":289,"type":16,"damageClass":0},"Secret Power":{"num":290,"type":0,"damageClass":1},"Dive":{"num":291,"type":10,"damageClass":1},"Arm Thrust":{"num":292,"type":1,"damageClass":1},"Camouflage":{"num":293,"type":0,"damageClass":0},"Tail Glow":{"num":294,"type":6,"damageClass":0},"Luster Purge":{"num":295,"type":13,"damageClass":2},"Mist Ball":{"num":296,"type":13,"damageClass":2},"Feather Dance":{"num":297,"type":2,"damageClass":0},"Teeter Dance":{"num":298,"type":0,"damageClass":0},"Blaze Kick":{"num":299,"type":9,"damageClass":1},"Mud Sport":{"num":300,"type":4,"damageClass":0},"Ice Ball":{"num":301,"type":14,"damageClass":1},"Needle Arm":{"num":302,"type":11,"damageClass":1},"Slack Off":{"num":303,"type":0,"damageClass":0},"Hyper Voice":{"num":304,"type":0,"damageClass":2},"Poison Fang":{"num":305,"type":3,"damageClass":1},"Crush Claw":{"num":306,"type":0,"damageClass":1},"Blast Burn":{"num":307,"type":9,"damageClass":2},"Hydro Cannon":{"num":308,"type":10,"damageClass":2},"Meteor Mash":{"num":309,"type":8,"damageClass":1},"Astonish":{"num":310,"type":7,"damageClass":1},"Weather Ball":{"num":311,"type":0,"damageClass":2},"Aromatherapy":{"num":312,"type":11,"damageClass":0},"Fake Tears":{"num":313,"type":16,"damageClass":0},"Air Cutter":{"num":314,"type":2,"damageClass":2},"Overheat":{"num":315,"type":9,"damageClass":2},"Odor Sleuth":{"num":316,"type":0,"damageClass":0},"Rock Tomb":{"num":317,"type":5,"damageClass":1},"Silver Wind":{"num":318,"type":6,"damageClass":2},"Metal Sound":{"num":319,"type":8,"damageClass":0},"Grass Whistle":{"num":320,"type":11,"damageClass":0},"Tickle":{"num":321,"type":0,"damageClass":0},"Cosmic Power":{"num":322,"type":13,"damageClass":0},"Water Spout":{"num":323,"type":10,"damageClass":2},"Signal Beam":{"num":324,"type":6,"damageClass":2},"Shadow Punch":{"num":325,"type":7,"damageClass":1},"Extrasensory":{"num":326,"type":13,"damageClass":2},"Sky Uppercut":{"num":327,"type":1,"damageClass":1},"Sand Tomb":{"num":328,"type":4,"damageClass":1},"Sheer Cold":{"num":329,"type":14,"damageClass":2},"Muddy Water":{"num":330,"type":10,"damageClass":2},"Bullet Seed":{"num":331,"type":11,"damageClass":1},"Aerial Ace":{"num":332,"type":2,"damageClass":1},"Icicle Spear":{"num":333,"type":14,"damageClass":1},"Iron Defense":{"num":334,"type":8,"damageClass":0},"Block":{"num":335,"type":0,"damageClass":0},"Howl":{"num":336,"type":0,"damageClass":0},"Dragon Claw":{"num":337,"type":15,"damageClass":1},"Frenzy Plant":{"num":338,"type":11,"damageClass":2},"Bulk Up":{"num":339,"type":1,"damageClass":0},"Bounce":{"num":340,"type":2,"damageClass":1},"Mud Shot":{"num":341,"type":4,"damageClass":2},"Poison Tail":{"num":342,"type":3,"damageClass":1},"Covet":{"num":343,"type":0,"damageClass":1},"Volt Tackle":{"num":344,"type":12,"damageClass":1},"Magical Leaf":{"num":345,"type":11,"damageClass":2},"Water Sport":{"num":346,"type":10,"damageClass":0},"Calm Mind":{"num":347,"type":13,"damageClass":0},"Leaf Blade":{"num":348,"type":11,"damageClass":1},"Dragon Dance":{"num":349,"type":15,"damageClass":0},"Rock Blast":{"num":350,"type":5,"damageClass":1},"Shock Wave":{"num":351,"type":12,"damageClass":2},"Water Pulse":{"num":352,"type":10,"damageClass":2},"Doom Desire":{"num":353,"type":8,"damageClass":2},"Psycho Boost":{"num":354,"type":13,"damageClass":2},"Roost":{"num":355,"type":2,"damageClass":0},"Gravity":{"num":356,"type":13,"damageClass":0},"Miracle Eye":{"num":357,"type":13,"damageClass":0},"Wake-Up Slap":{"num":358,"type":1,"damageClass":1},"Hammer Arm":{"num":359,"type":1,"damageClass":1},"Gyro Ball":{"num":360,"type":8,"damageClass":1},"Healing Wish":{"num":361,"type":13,"damageClass":0},"Brine":{"num":362,"type":10,"damageClass":2},"Natural Gift":{"num":363,"type":0,"damageClass":1},"Feint":{"num":364,"type":0,"damageClass":1},"Pluck":{"num":365,"type":2,"damageClass":1},"Tailwind":{"num":366,"type":2,"damageClass":0},"Acupressure":{"num":367,"type":0,"damageClass":0},"Metal Burst":{"num":368,"type":8,"damageClass":1},"U-turn":{"num":369,"type":6,"damageClass":1},"Close Combat":{"num":370,"type":1,"damageClass":1},"Payback":{"num":371,"type":16,"damageClass":1},"Assurance":{"num":372,"type":16,"damageClass":1},"Embargo":{"num":373,"type":16,"damageClass":0},"Fling":{"num":374,"type":16,"damageClass":1},"Psycho Shift":{"num":375,"type":13,"damageClass":0},"Trump Card":{"num":376,"type":0,"damageClass":2},"Heal Block":{"num":377,"type":13,"damageClass":0},"Wring Out":{"num":378,"type":0,"damageClass":2},"Power Trick":{"num":379,"type":13,"damageClass":0},"Gastro Acid":{"num":380,"type":3,"damageClass":0},"Lucky Chant":{"num":381,"type":0,"damageClass":0},"Me First":{"num":382,"type":0,"damageClass":0},"Copycat":{"num":383,"type":0,"damageClass":0},"Power Swap":{"num":384,"type":13,"damageClass":0},"Guard Swap":{"num":385,"type":13,"damageClass":0},"Punishment":{"num":386,"type":16,"damageClass":1},"Last Resort":{"num":387,"type":0,"damageClass":1},"Worry Seed":{"num":388,"type":11,"damageClass":0},"Sucker Punch":{"num":389,"type":16,"damageClass":1},"Toxic Spikes":{"num":390,"type":3,"damageClass":0},"Heart Swap":{"num":391,"type":13,"damageClass":0},"Aqua Ring":{"num":392,"type":10,"damageClass":0},"Magnet Rise":{"num":393,"type":12,"damageClass":0},"Flare Blitz":{"num":394,"type":9,"damageClass":1},"Force Palm":{"num":395,"type":1,"damageClass":1},"Aura Sphere":{"num":396,"type":1,"damageClass":2},"Rock Polish":{"num":397,"type":5,"damageClass":0},"Poison Jab":{"num":398,"type":3,"damageClass":1},"Dark Pulse":{"num":399,"type":16,"damageClass":2},"Night Slash":{"num":400,"type":16,"damageClass":1},"Aqua Tail":{"num":401,"type":10,"damageClass":1},"Seed Bomb":{"num":402,"type":11,"damageClass":1},"Air Slash":{"num":403,"type":2,"damageClass":2},"X-Scissor":{"num":404,"type":6,"damageClass":1},"Bug Buzz":{"num":405,"type":6,"damageClass":2},"Dragon Pulse":{"num":406,"type":15,"damageClass":2},"Dragon Rush":{"num":407,"type":15,"damageClass":1},"Power Gem":{"num":408,"type":5,"damageClass":2},"Drain Punch":{"num":409,"type":1,"damageClass":1},"Vacuum Wave":{"num":410,"type":1,"damageClass":2},"Focus Blast":{"num":411,"type":1,"damageClass":2},"Energy Ball":{"num":412,"type":11,"damageClass":2},"Brave Bird":{"num":413,"type":2,"damageClass":1},"Earth Power":{"num":414,"type":4,"damageClass":2},"Switcheroo":{"num":415,"type":16,"damageClass":0},"Giga Impact":{"num":416,"type":0,"damageClass":1},"Nasty Plot":{"num":417,"type":16,"damageClass":0},"Bullet Punch":{"num":418,"type":8,"damageClass":1},"Avalanche":{"num":419,"type":14,"damageClass":1},"Ice Shard":{"num":420,"type":14,"damageClass":1},"Shadow Claw":{"num":421,"type":7,"damageClass":1},"Thunder Fang":{"num":422,"type":12,"damageClass":1},"Ice Fang":{"num":423,"type":14,"damageClass":1},"Fire Fang":{"num":424,"type":9,"damageClass":1},"Shadow Sneak":{"num":425,"type":7,"damageClass":1},"Mud Bomb":{"num":426,"type":4,"damageClass":2},"Psycho Cut":{"num":427,"type":13,"damageClass":1},"Zen Headbutt":{"num":428,"type":13,"damageClass":1},"Mirror Shot":{"num":429,"type":8,"damageClass":2},"Flash Cannon":{"num":430,"type":8,"damageClass":2},"Rock Climb":{"num":431,"type":0,"damageClass":1},"Defog":{"num":432,"type":2,"damageClass":0},"Trick Room":{"num":433,"type":13,"damageClass":0},"Draco Meteor":{"num":434,"type":15,"damageClass":2},"Discharge":{"num":435,"type":12,"damageClass":2},"Lava Plume":{"num":436,"type":9,"damageClass":2},"Leaf Storm":{"num":437,"type":11,"damageClass":2},"Power Whip":{"num":438,"type":11,"damageClass":1},"Rock Wrecker":{"num":439,"type":5,"damageClass":1},"Cross Poison":{"num":440,"type":3,"damageClass":1},"Gunk Shot":{"num":441,"type":3,"damageClass":1},"Iron Head":{"num":442,"type":8,"damageClass":1},"Magnet Bomb":{"num":443,"type":8,"damageClass":1},"Stone Edge":{"num":444,"type":5,"damageClass":1},"Captivate":{"num":445,"type":0,"damageClass":0},"Stealth Rock":{"num":446,"type":5,"damageClass":0},"Grass Knot":{"num":447,"type":11,"damageClass":2},"Chatter":{"num":448,"type":2,"damageClass":2},"Judgment":{"num":449,"type":0,"damageClass":2},"Bug Bite":{"num":450,"type":6,"damageClass":1},"Charge Beam":{"num":451,"type":12,"damageClass":2},"Wood Hammer":{"num":452,"type":11,"damageClass":1},"Aqua Jet":{"num":453,"type":10,"damageClass":1},"Attack Order":{"num":454,"type":6,"damageClass":1},"Defend Order":{"num":455,"type":6,"damageClass":0},"Heal Order":{"num":456,"type":6,"damageClass":0},"Head Smash":{"num":457,"type":5,"damageClass":1},"Double Hit":{"num":458,"type":0,"damageClass":1},"Roar of Time":{"num":459,"type":15,"damageClass":2},"Spacial Rend":{"num":460,"type":15,"damageClass":2},"Lunar Dance":{"num":461,"type":13,"damageClass":0},"Crush Grip":{"num":462,"type":0,"damageClass":1},"Magma Storm":{"num":463,"type":9,"damageClass":2},"Dark Void":{"num":464,"type":16,"damageClass":0},"Seed Flare":{"num":465,"type":11,"damageClass":2},"Ominous Wind":{"num":466,"type":7,"damageClass":2},"Shadow Force":{"num":467,"type":7,"damageClass":1},"Hone Claws":{"num":468,"type":16,"damageClass":0},"Wide Guard":{"num":469,"type":5,"damageClass":0},"Guard Split":{"num":470,"type":13,"damageClass":0},"Power Split":{"num":471,"type":13,"damageClass":0},"Wonder Room":{"num":472,"type":13,"damageClass":0},"Psyshock":{"num":473,"type":13,"damageClass":2},"Venoshock":{"num":474,"type":3,"damageClass":2},"Autotomize":{"num":475,"type":8,"damageClass":0},"Rage Powder":{"num":476,"type":6,"damageClass":0},"Telekinesis":{"num":477,"type":13,"damageClass":0},"Magic Room":{"num":478,"type":13,"damageClass":0},"Smack Down":{"num":479,"type":5,"damageClass":1},"Storm Throw":{"num":480,"type":1,"damageClass":1},"Flame Burst":{"num":481,"type":9,"damageClass":2},"Sludge Wave":{"num":482,"type":3,"damageClass":2},"Quiver Dance":{"num":483,"type":6,"damageClass":0},"Heavy Slam":{"num":484,"type":8,"damageClass":1},"Synchronoise":{"num":485,"type":13,"damageClass":2},"Electro Ball":{"num":486,"type":12,"damageClass":2},"Soak":{"num":487,"type":10,"damageClass":0},"Flame Charge":{"num":488,"type":9,"damageClass":1},"Coil":{"num":489,"type":3,"damageClass":0},"Low Sweep":{"num":490,"type":1,"damageClass":1},"Acid Spray":{"num":491,"type":3,"damageClass":2},"Foul Play":{"num":492,"type":16,"damageClass":1},"Simple Beam":{"num":493,"type":0,"damageClass":0},"Entrainment":{"num":494,"type":0,"damageClass":0},"After You":{"num":495,"type":0,"damageClass":0},"Round":{"num":496,"type":0,"damageClass":2},"Echoed Voice":{"num":497,"type":0,"damageClass":2},"Chip Away":{"num":498,"type":0,"damageClass":1},"Clear Smog":{"num":499,"type":3,"damageClass":2},"Stored Power":{"num":500,"type":13,"damageClass":2},"Quick Guard":{"num":501,"type":1,"damageClass":0},"Ally Switch":{"num":502,"type":13,"damageClass":0},"Scald":{"num":503,"type":10,"damageClass":2},"Shell Smash":{"num":504,"type":0,"damageClass":0},"Heal Pulse":{"num":505,"type":13,"damageClass":0},"Hex":{"num":506,"type":7,"damageClass":2},"Sky Drop":{"num":507,"type":2,"damageClass":1},"Shift Gear":{"num":508,"type":8,"damageClass":0},"Circle Throw":{"num":509,"type":1,"damageClass":1},"Incinerate":{"num":510,"type":9,"damageClass":2},"Quash":{"num":511,"type":16,"damageClass":0},"Acrobatics":{"num":512,"type":2,"damageClass":1},"Reflect Type":{"num":513,"type":0,"damageClass":0},"Retaliate":{"num":514,"type":0,"damageClass":1},"Final Gambit":{"num":515,"type":1,"damageClass":2},"Bestow":{"num":516,"type":0,"damageClass":0},"Inferno":{"num":517,"type":9,"damageClass":2},"Water Pledge":{"num":518,"type":10,"damageClass":2},"Fire Pledge":{"num":519,"type":9,"damageClass":2},"Grass Pledge":{"num":520,"type":11,"damageClass":2},"Volt Switch":{"num":521,"type":12,"damageClass":2},"Struggle Bug":{"num":522,"type":6,"damageClass":2},"Bulldoze":{"num":523,"type":4,"damageClass":1},"Frost Breath":{"num":524,"type":14,"damageClass":2},"Dragon Tail":{"num":525,"type":15,"damageClass":1},"Work Up":{"num":526,"type":0,"damageClass":0},"Electroweb":{"num":527,"type":12,"damageClass":2},"Wild Charge":{"num":528,"type":12,"damageClass":1},"Drill Run":{"num":529,"type":4,"damageClass":1},"Dual Chop":{"num":530,"type":15,"damageClass":1},"Heart Stamp":{"num":531,"type":13,"damageClass":1},"Horn Leech":{"num":532,"type":11,"damageClass":1},"Sacred Sword":{"num":533,"type":1,"damageClass":1},"Razor Shell":{"num":534,"type":10,"damageClass":1},"Heat Crash":{"num":535,"type":9,"damageClass":1},"Leaf Tornado":{"num":536,"type":11,"damageClass":2},"Steamroller":{"num":537,"type":6,"damageClass":1},"Cotton Guard":{"num":538,"type":11,"damageClass":0},"Night Daze":{"num":539,"type":16,"damageClass":2},"Psystrike":{"num":540,"type":13,"damageClass":2},"Tail Slap":{"num":541,"type":0,"damageClass":1},"Hurricane":{"num":542,"type":2,"damageClass":2},"Head Charge":{"num":543,"type":0,"damageClass":1},"Gear Grind":{"num":544,"type":8,"damageClass":1},"Searing Shot":{"num":545,"type":9,"damageClass":2},"Techno Blast":{"num":546,"type":0,"damageClass":2},"Relic Song":{"num":547,"type":0,"damageClass":2},"Secret Sword":{"num":548,"type":1,"damageClass":2},"Glaciate":{"num":549,"type":14,"damageClass":2},"Bolt Strike":{"num":550,"type":12,"damageClass":1},"Blue Flare":{"num":551,"type":9,"damageClass":2},"Fiery Dance":{"num":552,"type":9,"damageClass":2},"Freeze Shock":{"num":553,"type":14,"damageClass":1},"Ice Burn":{"num":554,"type":14,"damageClass":2},"Snarl":{"num":555,"type":16,"damageClass":2},"Icicle Crash":{"num":556,"type":14,"damageClass":1},"V-create":{"num":557,"type":9,"damageClass":1},"Fusion Flare":{"num":558,"type":9,"damageClass":2},"Fusion Bolt":{"num":559,"type":12,"damageClass":1},"Baby-Doll Eyes":{"num":560,"type":17,"damageClass":0},"Boomburst":{"num":561,"type":0,"damageClass":2},"Crafty Shield":{"num":562,"type":17,"damageClass":0},"Dazzling Gleam":{"num":563,"type":17,"damageClass":2},"Draining Kiss":{"num":564,"type":17,"damageClass":2},"Fairy Wind":{"num":565,"type":17,"damageClass":2},"Flying Press":{"num":566,"type":1,"damageClass":1},"Forest's Curse":{"num":567,"type":11,"damageClass":0},"Freeze-Dry":{"num":568,"type":14,"damageClass":2},"Geomancy":{"num":569,"type":17,"damageClass":0},"Petal Blizzard":{"num":570,"type":11,"damageClass":1},"Infestation":{"num":571,"type":6,"damageClass":1},"Moonblast":{"num":572,"type":17,"damageClass":2},"Mystical Fire":{"num":573,"type":9,"damageClass":2},"Noble Roar":{"num":574,"type":0,"damageClass":0},"Nuzzle":{"num":575,"type":12,"damageClass":1},"Oblivion Wing":{"num":576,"type":2,"damageClass":2},"Parabolic Charge":{"num":577,"type":12,"damageClass":2},"Phantom Force":{"num":578,"type":7,"damageClass":1},"Play Rough":{"num":579,"type":17,"damageClass":1},"Play Nice":{"num":580,"type":0,"damageClass":0},"Trick-or-Treat":{"num":581,"type":7,"damageClass":0},"Water Shuriken":{"num":582,"type":10,"damageClass":1},"Aromatic Mist":{"num":583,"type":17,"damageClass":0},"Belch":{"num":584,"type":3,"damageClass":2},"Confide":{"num":585,"type":0,"damageClass":0},"Disarming Voice":{"num":586,"type":17,"damageClass":2},"Eerie Impulse":{"num":587,"type":12,"damageClass":0},"Electric Terrain":{"num":588,"type":12,"damageClass":0},"Electrify":{"num":589,"type":12,"damageClass":0},"Fairy Lock":{"num":590,"type":17,"damageClass":0},"Fell Stinger":{"num":591,"type":6,"damageClass":1},"Flower Shield":{"num":592,"type":17,"damageClass":0},"Grassy Terrain":{"num":593,"type":11,"damageClass":0},"Ion Deluge":{"num":594,"type":12,"damageClass":0},"King's Shield":{"num":595,"type":8,"damageClass":0},"Land's Wrath":{"num":596,"type":4,"damageClass":1},"Magnetic Flux":{"num":597,"type":12,"damageClass":0},"Mat Block":{"num":598,"type":1,"damageClass":0},"Misty Terrain":{"num":599,"type":17,"damageClass":0},"Parting Shot":{"num":600,"type":16,"damageClass":0},"Powder":{"num":601,"type":6,"damageClass":0},"Power-Up Punch":{"num":602,"type":1,"damageClass":1},"Rototiller":{"num":603,"type":4,"damageClass":0},"Spiky Shield":{"num":604,"type":11,"damageClass":0},"Sticky Web":{"num":605,"type":6,"damageClass":0},"Topsy-Turvy":{"num":606,"type":16,"damageClass":0},"Venom Drench":{"num":607,"type":3,"damageClass":0},"Happy Hour":{"num":608,"type":0,"damageClass":0},"Celebrate":{"num":609,"type":0,"damageClass":0},"Hold Back":{"num":610,"type":0,"damageClass":1},"Diamond Storm":{"num":611,"type":5,"damageClass":1},"Light of Ruin":{"num":612,"type":17,"damageClass":2},"Steam Eruption":{"num":613,"type":10,"damageClass":2},"Hyperspace Hole":{"num":614,"type":13,"damageClass":2},"Hold Hands":{"num":615,"type":0,"damageClass":0},"Thousand Arrows":{"num":616,"type":4,"damageClass":1},"Thousand Waves":{"num":617,"type":4,"damageClass":1}};
var __pokemon = {"Missingno":{"num":0,"type1":18,"type2":0},"Bulbasaur":{"num":1,"type1":11,"type2":3},"Ivysaur":{"num":2,"type1":11,"type2":3},"Venusaur":{"num":3,"type1":11,"type2":3},"Charmander":{"num":4,"type1":9,"type2":18},"Charmeleon":{"num":5,"type1":9,"type2":18},"Charizard":{"num":6,"type1":9,"type2":2},"Squirtle":{"num":7,"type1":10,"type2":18},"Wartortle":{"num":8,"type1":10,"type2":18},"Blastoise":{"num":9,"type1":10,"type2":18},"Caterpie":{"num":10,"type1":6,"type2":18},"Metapod":{"num":11,"type1":6,"type2":18},"Butterfree":{"num":12,"type1":6,"type2":2},"Weedle":{"num":13,"type1":6,"type2":3},"Kakuna":{"num":14,"type1":6,"type2":3},"Beedrill":{"num":15,"type1":6,"type2":3},"Pidgey":{"num":16,"type1":0,"type2":2},"Pidgeotto":{"num":17,"type1":0,"type2":2},"Pidgeot":{"num":18,"type1":0,"type2":2},"Rattata":{"num":19,"type1":0,"type2":18},"Raticate":{"num":20,"type1":0,"type2":18},"Spearow":{"num":21,"type1":0,"type2":2},"Fearow":{"num":22,"type1":0,"type2":2},"Ekans":{"num":23,"type1":3,"type2":18},"Arbok":{"num":24,"type1":3,"type2":18},"Pikachu":{"num":25,"type1":12,"type2":18},"Raichu":{"num":26,"type1":12,"type2":18},"Sandshrew":{"num":27,"type1":4,"type2":18},"Sandslash":{"num":28,"type1":4,"type2":18},"Nidoran-F":{"num":29,"type1":3,"type2":18},"Nidorina":{"num":30,"type1":3,"type2":18},"Nidoqueen":{"num":31,"type1":3,"type2":4},"Nidoran-M":{"num":32,"type1":3,"type2":18},"Nidorino":{"num":33,"type1":3,"type2":18},"Nidoking":{"num":34,"type1":3,"type2":4},"Clefairy":{"num":35,"type1":17,"type2":18},"Clefable":{"num":36,"type1":17,"type2":18},"Vulpix":{"num":37,"type1":9,"type2":18},"Ninetales":{"num":38,"type1":9,"type2":18},"Jigglypuff":{"num":39,"type1":0,"type2":17},"Wigglytuff":{"num":40,"type1":0,"type2":17},"Zubat":{"num":41,"type1":3,"type2":2},"Golbat":{"num":42,"type1":3,"type2":2},"Oddish":{"num":43,"type1":11,"type2":3},"Gloom":{"num":44,"type1":11,"type2":3},"Vileplume":{"num":45,"type1":11,"type2":3},"Paras":{"num":46,"type1":6,"type2":11},"Parasect":{"num":47,"type1":6,"type2":11},"Venonat":{"num":48,"type1":6,"type2":3},"Venomoth":{"num":49,"type1":6,"type2":3},"Diglett":{"num":50,"type1":4,"type2":18},"Dugtrio":{"num":51,"type1":4,"type2":18},"Meowth":{"num":52,"type1":0,"type2":18},"Persian":{"num":53,"type1":0,"type2":18},"Psyduck":{"num":54,"type1":10,"type2":18},"Golduck":{"num":55,"type1":10,"type2":18},"Mankey":{"num":56,"type1":1,"type2":18},"Primeape":{"num":57,"type1":1,"type2":18},"Growlithe":{"num":58,"type1":9,"type2":18},"Arcanine":{"num":59,"type1":9,"type2":18},"Poliwag":{"num":60,"type1":10,"type2":18},"Poliwhirl":{"num":61,"type1":10,"type2":18},"Poliwrath":{"num":62,"type1":10,"type2":1},"Abra":{"num":63,"type1":13,"type2":18},"Kadabra":{"num":64,"type1":13,"type2":18},"Alakazam":{"num":65,"type1":13,"type2":18},"Machop":{"num":66,"type1":1,"type2":18},"Machoke":{"num":67,"type1":1,"type2":18},"Machamp":{"num":68,"type1":1,"type2":18},"Bellsprout":{"num":69,"type1":11,"type2":3},"Weepinbell":{"num":70,"type1":11,"type2":3},"Victreebel":{"num":71,"type1":11,"type2":3},"Tentacool":{"num":72,"type1":10,"type2":3},"Tentacruel":{"num":73,"type1":10,"type2":3},"Geodude":{"num":74,"type1":5,"type2":4},"Graveler":{"num":75,"type1":5,"type2":4},"Golem":{"num":76,"type1":5,"type2":4},"Ponyta":{"num":77,"type1":9,"type2":18},"Rapidash":{"num":78,"type1":9,"type2":18},"Slowpoke":{"num":79,"type1":10,"type2":13},"Slowbro":{"num":80,"type1":10,"type2":13},"Magnemite":{"num":81,"type1":12,"type2":8},"Magneton":{"num":82,"type1":12,"type2":8},"Farfetch'd":{"num":83,"type1":0,"type2":2},"Doduo":{"num":84,"type1":0,"type2":2},"Dodrio":{"num":85,"type1":0,"type2":2},"Seel":{"num":86,"type1":10,"type2":18},"Dewgong":{"num":87,"type1":10,"type2":14},"Grimer":{"num":88,"type1":3,"type2":18},"Muk":{"num":89,"type1":3,"type2":18},"Shellder":{"num":90,"type1":10,"type2":18},"Cloyster":{"num":91,"type1":10,"type2":14},"Gastly":{"num":92,"type1":7,"type2":3},"Haunter":{"num":93,"type1":7,"type2":3},"Gengar":{"num":94,"type1":7,"type2":3},"Onix":{"num":95,"type1":5,"type2":4},"Drowzee":{"num":96,"type1":13,"type2":18},"Hypno":{"num":97,"type1":13,"type2":18},"Krabby":{"num":98,"type1":10,"type2":18},"Kingler":{"num":99,"type1":10,"type2":18},"Voltorb":{"num":100,"type1":12,"type2":18},"Electrode":{"num":101,"type1":12,"type2":18},"Exeggcute":{"num":102,"type1":11,"type2":13},"Exeggutor":{"num":103,"type1":11,"type2":13},"Cubone":{"num":104,"type1":4,"type2":18},"Marowak":{"num":105,"type1":4,"type2":18},"Hitmonlee":{"num":106,"type1":1,"type2":18},"Hitmonchan":{"num":107,"type1":1,"type2":18},"Lickitung":{"num":108,"type1":0,"type2":18},"Koffing":{"num":109,"type1":3,"type2":18},"Weezing":{"num":110,"type1":3,"type2":18},"Rhyhorn":{"num":111,"type1":4,"type2":5},"Rhydon":{"num":112,"type1":4,"type2":5},"Chansey":{"num":113,"type1":0,"type2":18},"Tangela":{"num":114,"type1":11,"type2":18},"Kangaskhan":{"num":115,"type1":0,"type2":18},"Horsea":{"num":116,"type1":10,"type2":18},"Seadra":{"num":117,"type1":10,"type2":18},"Goldeen":{"num":118,"type1":10,"type2":18},"Seaking":{"num":119,"type1":10,"type2":18},"Staryu":{"num":120,"type1":10,"type2":18},"Starmie":{"num":121,"type1":10,"type2":13},"Mr. Mime":{"num":122,"type1":13,"type2":17},"Scyther":{"num":123,"type1":6,"type2":2},"Jynx":{"num":124,"type1":14,"type2":13},"Electabuzz":{"num":125,"type1":12,"type2":18},"Magmar":{"num":126,"type1":9,"type2":18},"Pinsir":{"num":127,"type1":6,"type2":18},"Tauros":{"num":128,"type1":0,"type2":18},"Magikarp":{"num":129,"type1":10,"type2":18},"Gyarados":{"num":130,"type1":10,"type2":2},"Lapras":{"num":131,"type1":10,"type2":14},"Ditto":{"num":132,"type1":0,"type2":18},"Eevee":{"num":133,"type1":0,"type2":18},"Vaporeon":{"num":134,"type1":10,"type2":18},"Jolteon":{"num":135,"type1":12,"type2":18},"Flareon":{"num":136,"type1":9,"type2":18},"Porygon":{"num":137,"type1":0,"type2":18},"Omanyte":{"num":138,"type1":5,"type2":10},"Omastar":{"num":139,"type1":5,"type2":10},"Kabuto":{"num":140,"type1":5,"type2":10},"Kabutops":{"num":141,"type1":5,"type2":10},"Aerodactyl":{"num":142,"type1":5,"type2":2},"Snorlax":{"num":143,"type1":0,"type2":18},"Articuno":{"num":144,"type1":14,"type2":2},"Zapdos":{"num":145,"type1":12,"type2":2},"Moltres":{"num":146,"type1":9,"type2":2},"Dratini":{"num":147,"type1":15,"type2":18},"Dragonair":{"num":148,"type1":15,"type2":18},"Dragonite":{"num":149,"type1":15,"type2":2},"Mewtwo":{"num":150,"type1":13,"type2":18},"Mew":{"num":151,"type1":13,"type2":18},"Chikorita":{"num":152,"type1":11,"type2":18},"Bayleef":{"num":153,"type1":11,"type2":18},"Meganium":{"num":154,"type1":11,"type2":18},"Cyndaquil":{"num":155,"type1":9,"type2":18},"Quilava":{"num":156,"type1":9,"type2":18},"Typhlosion":{"num":157,"type1":9,"type2":18},"Totodile":{"num":158,"type1":10,"type2":18},"Croconaw":{"num":159,"type1":10,"type2":18},"Feraligatr":{"num":160,"type1":10,"type2":18},"Sentret":{"num":161,"type1":0,"type2":18},"Furret":{"num":162,"type1":0,"type2":18},"Hoothoot":{"num":163,"type1":0,"type2":2},"Noctowl":{"num":164,"type1":0,"type2":2},"Ledyba":{"num":165,"type1":6,"type2":2},"Ledian":{"num":166,"type1":6,"type2":2},"Spinarak":{"num":167,"type1":6,"type2":3},"Ariados":{"num":168,"type1":6,"type2":3},"Crobat":{"num":169,"type1":3,"type2":2},"Chinchou":{"num":170,"type1":10,"type2":12},"Lanturn":{"num":171,"type1":10,"type2":12},"Pichu":{"num":172,"type1":12,"type2":18},"Cleffa":{"num":173,"type1":17,"type2":18},"Igglybuff":{"num":174,"type1":0,"type2":17},"Togepi":{"num":175,"type1":17,"type2":18},"Togetic":{"num":176,"type1":17,"type2":2},"Natu":{"num":177,"type1":13,"type2":2},"Xatu":{"num":178,"type1":13,"type2":2},"Mareep":{"num":179,"type1":12,"type2":18},"Flaaffy":{"num":180,"type1":12,"type2":18},"Ampharos":{"num":181,"type1":12,"type2":18},"Bellossom":{"num":182,"type1":11,"type2":18},"Marill":{"num":183,"type1":10,"type2":17},"Azumarill":{"num":184,"type1":10,"type2":17},"Sudowoodo":{"num":185,"type1":5,"type2":18},"Politoed":{"num":186,"type1":10,"type2":18},"Hoppip":{"num":187,"type1":11,"type2":2},"Skiploom":{"num":188,"type1":11,"type2":2},"Jumpluff":{"num":189,"type1":11,"type2":2},"Aipom":{"num":190,"type1":0,"type2":18},"Sunkern":{"num":191,"type1":11,"type2":18},"Sunflora":{"num":192,"type1":11,"type2":18},"Yanma":{"num":193,"type1":6,"type2":2},"Wooper":{"num":194,"type1":10,"type2":4},"Quagsire":{"num":195,"type1":10,"type2":4},"Espeon":{"num":196,"type1":13,"type2":18},"Umbreon":{"num":197,"type1":16,"type2":18},"Murkrow":{"num":198,"type1":16,"type2":2},"Slowking":{"num":199,"type1":10,"type2":13},"Misdreavus":{"num":200,"type1":7,"type2":18},"Unown":{"num":201,"type1":13,"type2":18},"Wobbuffet":{"num":202,"type1":13,"type2":18},"Girafarig":{"num":203,"type1":0,"type2":13},"Pineco":{"num":204,"type1":6,"type2":18},"Forretress":{"num":205,"type1":6,"type2":8},"Dunsparce":{"num":206,"type1":0,"type2":18},"Gligar":{"num":207,"type1":4,"type2":2},"Steelix":{"num":208,"type1":8,"type2":4},"Snubbull":{"num":209,"type1":17,"type2":18},"Granbull":{"num":210,"type1":17,"type2":18},"Qwilfish":{"num":211,"type1":10,"type2":3},"Scizor":{"num":212,"type1":6,"type2":8},"Shuckle":{"num":213,"type1":6,"type2":5},"Heracross":{"num":214,"type1":6,"type2":1},"Sneasel":{"num":215,"type1":16,"type2":14},"Teddiursa":{"num":216,"type1":0,"type2":18},"Ursaring":{"num":217,"type1":0,"type2":18},"Slugma":{"num":218,"type1":9,"type2":18},"Magcargo":{"num":219,"type1":9,"type2":5},"Swinub":{"num":220,"type1":14,"type2":4},"Piloswine":{"num":221,"type1":14,"type2":4},"Corsola":{"num":222,"type1":10,"type2":5},"Remoraid":{"num":223,"type1":10,"type2":18},"Octillery":{"num":224,"type1":10,"type2":18},"Delibird":{"num":225,"type1":14,"type2":2},"Mantine":{"num":226,"type1":10,"type2":2},"Skarmory":{"num":227,"type1":8,"type2":2},"Houndour":{"num":228,"type1":16,"type2":9},"Houndoom":{"num":229,"type1":16,"type2":9},"Kingdra":{"num":230,"type1":10,"type2":15},"Phanpy":{"num":231,"type1":4,"type2":18},"Donphan":{"num":232,"type1":4,"type2":18},"Porygon2":{"num":233,"type1":0,"type2":18},"Stantler":{"num":234,"type1":0,"type2":18},"Smeargle":{"num":235,"type1":0,"type2":18},"Tyrogue":{"num":236,"type1":1,"type2":18},"Hitmontop":{"num":237,"type1":1,"type2":18},"Smoochum":{"num":238,"type1":14,"type2":13},"Elekid":{"num":239,"type1":12,"type2":18},"Magby":{"num":240,"type1":9,"type2":18},"Miltank":{"num":241,"type1":0,"type2":18},"Blissey":{"num":242,"type1":0,"type2":18},"Raikou":{"num":243,"type1":12,"type2":18},"Entei":{"num":244,"type1":9,"type2":18},"Suicune":{"num":245,"type1":10,"type2":18},"Larvitar":{"num":246,"type1":5,"type2":4},"Pupitar":{"num":247,"type1":5,"type2":4},"Tyranitar":{"num":248,"type1":5,"type2":16},"Lugia":{"num":249,"type1":13,"type2":2},"Ho-Oh":{"num":250,"type1":9,"type2":2},"Celebi":{"num":251,"type1":13,"type2":11},"Treecko":{"num":252,"type1":11,"type2":18},"Grovyle":{"num":253,"type1":11,"type2":18},"Sceptile":{"num":254,"type1":11,"type2":18},"Torchic":{"num":255,"type1":9,"type2":18},"Combusken":{"num":256,"type1":9,"type2":1},"Blaziken":{"num":257,"type1":9,"type2":1},"Mudkip":{"num":258,"type1":10,"type2":18},"Marshtomp":{"num":259,"type1":10,"type2":4},"Swampert":{"num":260,"type1":10,"type2":4},"Poochyena":{"num":261,"type1":16,"type2":18},"Mightyena":{"num":262,"type1":16,"type2":18},"Zigzagoon":{"num":263,"type1":0,"type2":18},"Linoone":{"num":264,"type1":0,"type2":18},"Wurmple":{"num":265,"type1":6,"type2":18},"Silcoon":{"num":266,"type1":6,"type2":18},"Beautifly":{"num":267,"type1":6,"type2":2},"Cascoon":{"num":268,"type1":6,"type2":18},"Dustox":{"num":269,"type1":6,"type2":3},"Lotad":{"num":270,"type1":10,"type2":11},"Lombre":{"num":271,"type1":10,"type2":11},"Ludicolo":{"num":272,"type1":10,"type2":11},"Seedot":{"num":273,"type1":11,"type2":18},"Nuzleaf":{"num":274,"type1":11,"type2":16},"Shiftry":{"num":275,"type1":11,"type2":16},"Taillow":{"num":276,"type1":0,"type2":2},"Swellow":{"num":277,"type1":0,"type2":2},"Wingull":{"num":278,"type1":10,"type2":2},"Pelipper":{"num":279,"type1":10,"type2":2},"Ralts":{"num":280,"type1":13,"type2":17},"Kirlia":{"num":281,"type1":13,"type2":17},"Gardevoir":{"num":282,"type1":13,"type2":17},"Surskit":{"num":283,"type1":6,"type2":10},"Masquerain":{"num":284,"type1":6,"type2":2},"Shroomish":{"num":285,"type1":11,"type2":18},"Breloom":{"num":286,"type1":11,"type2":1},"Slakoth":{"num":287,"type1":0,"type2":18},"Vigoroth":{"num":288,"type1":0,"type2":18},"Slaking":{"num":289,"type1":0,"type2":18},"Nincada":{"num":290,"type1":6,"type2":4},"Ninjask":{"num":291,"type1":6,"type2":2},"Shedinja":{"num":292,"type1":6,"type2":7},"Whismur":{"num":293,"type1":0,"type2":18},"Loudred":{"num":294,"type1":0,"type2":18},"Exploud":{"num":295,"type1":0,"type2":18},"Makuhita":{"num":296,"type1":1,"type2":18},"Hariyama":{"num":297,"type1":1,"type2":18},"Azurill":{"num":298,"type1":0,"type2":17},"Nosepass":{"num":299,"type1":5,"type2":18},"Skitty":{"num":300,"type1":0,"type2":18},"Delcatty":{"num":301,"type1":0,"type2":18},"Sableye":{"num":302,"type1":16,"type2":7},"Mawile":{"num":303,"type1":8,"type2":17},"Aron":{"num":304,"type1":8,"type2":5},"Lairon":{"num":305,"type1":8,"type2":5},"Aggron":{"num":306,"type1":8,"type2":5},"Meditite":{"num":307,"type1":1,"type2":13},"Medicham":{"num":308,"type1":1,"type2":13},"Electrike":{"num":309,"type1":12,"type2":18},"Manectric":{"num":310,"type1":12,"type2":18},"Plusle":{"num":311,"type1":12,"type2":18},"Minun":{"num":312,"type1":12,"type2":18},"Volbeat":{"num":313,"type1":6,"type2":18},"Illumise":{"num":314,"type1":6,"type2":18},"Roselia":{"num":315,"type1":11,"type2":3},"Gulpin":{"num":316,"type1":3,"type2":18},"Swalot":{"num":317,"type1":3,"type2":18},"Carvanha":{"num":318,"type1":10,"type2":16},"Sharpedo":{"num":319,"type1":10,"type2":16},"Wailmer":{"num":320,"type1":10,"type2":18},"Wailord":{"num":321,"type1":10,"type2":18},"Numel":{"num":322,"type1":9,"type2":4},"Camerupt":{"num":323,"type1":9,"type2":4},"Torkoal":{"num":324,"type1":9,"type2":18},"Spoink":{"num":325,"type1":13,"type2":18},"Grumpig":{"num":326,"type1":13,"type2":18},"Spinda":{"num":327,"type1":0,"type2":18},"Trapinch":{"num":328,"type1":4,"type2":18},"Vibrava":{"num":329,"type1":4,"type2":15},"Flygon":{"num":330,"type1":4,"type2":15},"Cacnea":{"num":331,"type1":11,"type2":18},"Cacturne":{"num":332,"type1":11,"type2":16},"Swablu":{"num":333,"type1":0,"type2":2},"Altaria":{"num":334,"type1":15,"type2":2},"Zangoose":{"num":335,"type1":0,"type2":18},"Seviper":{"num":336,"type1":3,"type2":18},"Lunatone":{"num":337,"type1":5,"type2":13},"Solrock":{"num":338,"type1":5,"type2":13},"Barboach":{"num":339,"type1":10,"type2":4},"Whiscash":{"num":340,"type1":10,"type2":4},"Corphish":{"num":341,"type1":10,"type2":18},"Crawdaunt":{"num":342,"type1":10,"type2":16},"Baltoy":{"num":343,"type1":4,"type2":13},"Claydol":{"num":344,"type1":4,"type2":13},"Lileep":{"num":345,"type1":5,"type2":11},"Cradily":{"num":346,"type1":5,"type2":11},"Anorith":{"num":347,"type1":5,"type2":6},"Armaldo":{"num":348,"type1":5,"type2":6},"Feebas":{"num":349,"type1":10,"type2":18},"Milotic":{"num":350,"type1":10,"type2":18},"Castform":{"num":351,"type1":0,"type2":18},"Kecleon":{"num":352,"type1":0,"type2":18},"Shuppet":{"num":353,"type1":7,"type2":18},"Banette":{"num":354,"type1":7,"type2":18},"Duskull":{"num":355,"type1":7,"type2":18},"Dusclops":{"num":356,"type1":7,"type2":18},"Tropius":{"num":357,"type1":11,"type2":2},"Chimecho":{"num":358,"type1":13,"type2":18},"Absol":{"num":359,"type1":16,"type2":18},"Wynaut":{"num":360,"type1":13,"type2":18},"Snorunt":{"num":361,"type1":14,"type2":18},"Glalie":{"num":362,"type1":14,"type2":18},"Spheal":{"num":363,"type1":14,"type2":10},"Sealeo":{"num":364,"type1":14,"type2":10},"Walrein":{"num":365,"type1":14,"type2":10},"Clamperl":{"num":366,"type1":10,"type2":18},"Huntail":{"num":367,"type1":10,"type2":18},"Gorebyss":{"num":368,"type1":10,"type2":18},"Relicanth":{"num":369,"type1":10,"type2":5},"Luvdisc":{"num":370,"type1":10,"type2":18},"Bagon":{"num":371,"type1":15,"type2":18},"Shelgon":{"num":372,"type1":15,"type2":18},"Salamence":{"num":373,"type1":15,"type2":2},"Beldum":{"num":374,"type1":8,"type2":13},"Metang":{"num":375,"type1":8,"type2":13},"Metagross":{"num":376,"type1":8,"type2":13},"Regirock":{"num":377,"type1":5,"type2":18},"Regice":{"num":378,"type1":14,"type2":18},"Registeel":{"num":379,"type1":8,"type2":18},"Latias":{"num":380,"type1":15,"type2":13},"Latios":{"num":381,"type1":15,"type2":13},"Kyogre":{"num":382,"type1":10,"type2":18},"Groudon":{"num":383,"type1":4,"type2":18},"Rayquaza":{"num":384,"type1":15,"type2":2},"Jirachi":{"num":385,"type1":8,"type2":13},"Deoxys":{"num":386,"type1":13,"type2":18},"Turtwig":{"num":387,"type1":11,"type2":18},"Grotle":{"num":388,"type1":11,"type2":18},"Torterra":{"num":389,"type1":11,"type2":4},"Chimchar":{"num":390,"type1":9,"type2":18},"Monferno":{"num":391,"type1":9,"type2":1},"Infernape":{"num":392,"type1":9,"type2":1},"Piplup":{"num":393,"type1":10,"type2":18},"Prinplup":{"num":394,"type1":10,"type2":18},"Empoleon":{"num":395,"type1":10,"type2":8},"Starly":{"num":396,"type1":0,"type2":2},"Staravia":{"num":397,"type1":0,"type2":2},"Staraptor":{"num":398,"type1":0,"type2":2},"Bidoof":{"num":399,"type1":0,"type2":18},"Bibarel":{"num":400,"type1":0,"type2":10},"Kricketot":{"num":401,"type1":6,"type2":18},"Kricketune":{"num":402,"type1":6,"type2":18},"Shinx":{"num":403,"type1":12,"type2":18},"Luxio":{"num":404,"type1":12,"type2":18},"Luxray":{"num":405,"type1":12,"type2":18},"Budew":{"num":406,"type1":11,"type2":3},"Roserade":{"num":407,"type1":11,"type2":3},"Cranidos":{"num":408,"type1":5,"type2":18},"Rampardos":{"num":409,"type1":5,"type2":18},"Shieldon":{"num":410,"type1":5,"type2":8},"Bastiodon":{"num":411,"type1":5,"type2":8},"Burmy":{"num":412,"type1":6,"type2":18},"Wormadam":{"num":413,"type1":6,"type2":11},"Mothim":{"num":414,"type1":6,"type2":2},"Combee":{"num":415,"type1":6,"type2":2},"Vespiquen":{"num":416,"type1":6,"type2":2},"Pachirisu":{"num":417,"type1":12,"type2":18},"Buizel":{"num":418,"type1":10,"type2":18},"Floatzel":{"num":419,"type1":10,"type2":18},"Cherubi":{"num":420,"type1":11,"type2":18},"Cherrim":{"num":421,"type1":11,"type2":18},"Shellos":{"num":422,"type1":10,"type2":18},"Gastrodon":{"num":423,"type1":10,"type2":4},"Ambipom":{"num":424,"type1":0,"type2":18},"Drifloon":{"num":425,"type1":7,"type2":2},"Drifblim":{"num":426,"type1":7,"type2":2},"Buneary":{"num":427,"type1":0,"type2":18},"Lopunny":{"num":428,"type1":0,"type2":18},"Mismagius":{"num":429,"type1":7,"type2":18},"Honchkrow":{"num":430,"type1":16,"type2":2},"Glameow":{"num":431,"type1":0,"type2":18},"Purugly":{"num":432,"type1":0,"type2":18},"Chingling":{"num":433,"type1":13,"type2":18},"Stunky":{"num":434,"type1":3,"type2":16},"Skuntank":{"num":435,"type1":3,"type2":16},"Bronzor":{"num":436,"type1":8,"type2":13},"Bronzong":{"num":437,"type1":8,"type2":13},"Bonsly":{"num":438,"type1":5,"type2":18},"Mime Jr.":{"num":439,"type1":13,"type2":17},"Happiny":{"num":440,"type1":0,"type2":18},"Chatot":{"num":441,"type1":0,"type2":2},"Spiritomb":{"num":442,"type1":7,"type2":16},"Gible":{"num":443,"type1":15,"type2":4},"Gabite":{"num":444,"type1":15,"type2":4},"Garchomp":{"num":445,"type1":15,"type2":4},"Munchlax":{"num":446,"type1":0,"type2":18},"Riolu":{"num":447,"type1":1,"type2":18},"Lucario":{"num":448,"type1":1,"type2":8},"Hippopotas":{"num":449,"type1":4,"type2":18},"Hippowdon":{"num":450,"type1":4,"type2":18},"Skorupi":{"num":451,"type1":3,"type2":6},"Drapion":{"num":452,"type1":3,"type2":16},"Croagunk":{"num":453,"type1":3,"type2":1},"Toxicroak":{"num":454,"type1":3,"type2":1},"Carnivine":{"num":455,"type1":11,"type2":18},"Finneon":{"num":456,"type1":10,"type2":18},"Lumineon":{"num":457,"type1":10,"type2":18},"Mantyke":{"num":458,"type1":10,"type2":2},"Snover":{"num":459,"type1":14,"type2":11},"Abomasnow":{"num":460,"type1":14,"type2":11},"Weavile":{"num":461,"type1":16,"type2":14},"Magnezone":{"num":462,"type1":12,"type2":8},"Lickilicky":{"num":463,"type1":0,"type2":18},"Rhyperior":{"num":464,"type1":4,"type2":5},"Tangrowth":{"num":465,"type1":11,"type2":18},"Electivire":{"num":466,"type1":12,"type2":18},"Magmortar":{"num":467,"type1":9,"type2":18},"Togekiss":{"num":468,"type1":17,"type2":2},"Yanmega":{"num":469,"type1":6,"type2":2},"Leafeon":{"num":470,"type1":11,"type2":18},"Glaceon":{"num":471,"type1":14,"type2":18},"Gliscor":{"num":472,"type1":4,"type2":2},"Mamoswine":{"num":473,"type1":14,"type2":4},"Porygon-Z":{"num":474,"type1":0,"type2":18},"Gallade":{"num":475,"type1":13,"type2":1},"Probopass":{"num":476,"type1":5,"type2":8},"Dusknoir":{"num":477,"type1":7,"type2":18},"Froslass":{"num":478,"type1":14,"type2":7},"Rotom":{"num":479,"type1":12,"type2":7},"Uxie":{"num":480,"type1":13,"type2":18},"Mesprit":{"num":481,"type1":13,"type2":18},"Azelf":{"num":482,"type1":13,"type2":18},"Dialga":{"num":483,"type1":8,"type2":15},"Palkia":{"num":484,"type1":10,"type2":15},"Heatran":{"num":485,"type1":9,"type2":8},"Regigigas":{"num":486,"type1":0,"type2":18},"Giratina":{"num":487,"type1":7,"type2":15},"Cresselia":{"num":488,"type1":13,"type2":18},"Phione":{"num":489,"type1":10,"type2":18},"Manaphy":{"num":490,"type1":10,"type2":18},"Darkrai":{"num":491,"type1":16,"type2":18},"Shaymin":{"num":492,"type1":11,"type2":18},"Arceus":{"num":493,"type1":0,"type2":18},"Victini":{"num":494,"type1":13,"type2":9},"Snivy":{"num":495,"type1":11,"type2":18},"Servine":{"num":496,"type1":11,"type2":18},"Serperior":{"num":497,"type1":11,"type2":18},"Tepig":{"num":498,"type1":9,"type2":18},"Pignite":{"num":499,"type1":9,"type2":1},"Emboar":{"num":500,"type1":9,"type2":1},"Oshawott":{"num":501,"type1":10,"type2":18},"Dewott":{"num":502,"type1":10,"type2":18},"Samurott":{"num":503,"type1":10,"type2":18},"Patrat":{"num":504,"type1":0,"type2":18},"Watchog":{"num":505,"type1":0,"type2":18},"Lillipup":{"num":506,"type1":0,"type2":18},"Herdier":{"num":507,"type1":0,"type2":18},"Stoutland":{"num":508,"type1":0,"type2":18},"Purrloin":{"num":509,"type1":16,"type2":18},"Liepard":{"num":510,"type1":16,"type2":18},"Pansage":{"num":511,"type1":11,"type2":18},"Simisage":{"num":512,"type1":11,"type2":18},"Pansear":{"num":513,"type1":9,"type2":18},"Simisear":{"num":514,"type1":9,"type2":18},"Panpour":{"num":515,"type1":10,"type2":18},"Simipour":{"num":516,"type1":10,"type2":18},"Munna":{"num":517,"type1":13,"type2":18},"Musharna":{"num":518,"type1":13,"type2":18},"Pidove":{"num":519,"type1":0,"type2":2},"Tranquill":{"num":520,"type1":0,"type2":2},"Unfezant":{"num":521,"type1":0,"type2":2},"Blitzle":{"num":522,"type1":12,"type2":18},"Zebstrika":{"num":523,"type1":12,"type2":18},"Roggenrola":{"num":524,"type1":5,"type2":18},"Boldore":{"num":525,"type1":5,"type2":18},"Gigalith":{"num":526,"type1":5,"type2":18},"Woobat":{"num":527,"type1":13,"type2":2},"Swoobat":{"num":528,"type1":13,"type2":2},"Drilbur":{"num":529,"type1":4,"type2":18},"Excadrill":{"num":530,"type1":4,"type2":8},"Audino":{"num":531,"type1":0,"type2":18},"Timburr":{"num":532,"type1":1,"type2":18},"Gurdurr":{"num":533,"type1":1,"type2":18},"Conkeldurr":{"num":534,"type1":1,"type2":18},"Tympole":{"num":535,"type1":10,"type2":18},"Palpitoad":{"num":536,"type1":10,"type2":4},"Seismitoad":{"num":537,"type1":10,"type2":4},"Throh":{"num":538,"type1":1,"type2":18},"Sawk":{"num":539,"type1":1,"type2":18},"Sewaddle":{"num":540,"type1":6,"type2":11},"Swadloon":{"num":541,"type1":6,"type2":11},"Leavanny":{"num":542,"type1":6,"type2":11},"Venipede":{"num":543,"type1":6,"type2":3},"Whirlipede":{"num":544,"type1":6,"type2":3},"Scolipede":{"num":545,"type1":6,"type2":3},"Cottonee":{"num":546,"type1":11,"type2":17},"Whimsicott":{"num":547,"type1":11,"type2":17},"Petilil":{"num":548,"type1":11,"type2":18},"Lilligant":{"num":549,"type1":11,"type2":18},"Basculin":{"num":550,"type1":10,"type2":18},"Sandile":{"num":551,"type1":4,"type2":16},"Krokorok":{"num":552,"type1":4,"type2":16},"Krookodile":{"num":553,"type1":4,"type2":16},"Darumaka":{"num":554,"type1":9,"type2":18},"Darmanitan":{"num":555,"type1":9,"type2":18},"Maractus":{"num":556,"type1":11,"type2":18},"Dwebble":{"num":557,"type1":6,"type2":5},"Crustle":{"num":558,"type1":6,"type2":5},"Scraggy":{"num":559,"type1":16,"type2":1},"Scrafty":{"num":560,"type1":16,"type2":1},"Sigilyph":{"num":561,"type1":13,"type2":2},"Yamask":{"num":562,"type1":7,"type2":18},"Cofagrigus":{"num":563,"type1":7,"type2":18},"Tirtouga":{"num":564,"type1":10,"type2":5},"Carracosta":{"num":565,"type1":10,"type2":5},"Archen":{"num":566,"type1":5,"type2":2},"Archeops":{"num":567,"type1":5,"type2":2},"Trubbish":{"num":568,"type1":3,"type2":18},"Garbodor":{"num":569,"type1":3,"type2":18},"Zorua":{"num":570,"type1":16,"type2":18},"Zoroark":{"num":571,"type1":16,"type2":18},"Minccino":{"num":572,"type1":0,"type2":18},"Cinccino":{"num":573,"type1":0,"type2":18},"Gothita":{"num":574,"type1":13,"type2":18},"Gothorita":{"num":575,"type1":13,"type2":18},"Gothitelle":{"num":576,"type1":13,"type2":18},"Solosis":{"num":577,"type1":13,"type2":18},"Duosion":{"num":578,"type1":13,"type2":18},"Reuniclus":{"num":579,"type1":13,"type2":18},"Ducklett":{"num":580,"type1":10,"type2":2},"Swanna":{"num":581,"type1":10,"type2":2},"Vanillite":{"num":582,"type1":14,"type2":18},"Vanillish":{"num":583,"type1":14,"type2":18},"Vanilluxe":{"num":584,"type1":14,"type2":18},"Deerling":{"num":585,"type1":0,"type2":11},"Sawsbuck":{"num":586,"type1":0,"type2":11},"Emolga":{"num":587,"type1":12,"type2":2},"Karrablast":{"num":588,"type1":6,"type2":18},"Escavalier":{"num":589,"type1":6,"type2":8},"Foongus":{"num":590,"type1":11,"type2":3},"Amoonguss":{"num":591,"type1":11,"type2":3},"Frillish":{"num":592,"type1":10,"type2":7},"Jellicent":{"num":593,"type1":10,"type2":7},"Alomomola":{"num":594,"type1":10,"type2":18},"Joltik":{"num":595,"type1":6,"type2":12},"Galvantula":{"num":596,"type1":6,"type2":12},"Ferroseed":{"num":597,"type1":11,"type2":8},"Ferrothorn":{"num":598,"type1":11,"type2":8},"Klink":{"num":599,"type1":8,"type2":18},"Klang":{"num":600,"type1":8,"type2":18},"Klinklang":{"num":601,"type1":8,"type2":18},"Tynamo":{"num":602,"type1":12,"type2":18},"Eelektrik":{"num":603,"type1":12,"type2":18},"Eelektross":{"num":604,"type1":12,"type2":18},"Elgyem":{"num":605,"type1":13,"type2":18},"Beheeyem":{"num":606,"type1":13,"type2":18},"Litwick":{"num":607,"type1":7,"type2":9},"Lampent":{"num":608,"type1":7,"type2":9},"Chandelure":{"num":609,"type1":7,"type2":9},"Axew":{"num":610,"type1":15,"type2":18},"Fraxure":{"num":611,"type1":15,"type2":18},"Haxorus":{"num":612,"type1":15,"type2":18},"Cubchoo":{"num":613,"type1":14,"type2":18},"Beartic":{"num":614,"type1":14,"type2":18},"Cryogonal":{"num":615,"type1":14,"type2":18},"Shelmet":{"num":616,"type1":6,"type2":18},"Accelgor":{"num":617,"type1":6,"type2":18},"Stunfisk":{"num":618,"type1":4,"type2":12},"Mienfoo":{"num":619,"type1":1,"type2":18},"Mienshao":{"num":620,"type1":1,"type2":18},"Druddigon":{"num":621,"type1":15,"type2":18},"Golett":{"num":622,"type1":4,"type2":7},"Golurk":{"num":623,"type1":4,"type2":7},"Pawniard":{"num":624,"type1":16,"type2":8},"Bisharp":{"num":625,"type1":16,"type2":8},"Bouffalant":{"num":626,"type1":0,"type2":18},"Rufflet":{"num":627,"type1":0,"type2":2},"Braviary":{"num":628,"type1":0,"type2":2},"Vullaby":{"num":629,"type1":16,"type2":2},"Mandibuzz":{"num":630,"type1":16,"type2":2},"Heatmor":{"num":631,"type1":9,"type2":18},"Durant":{"num":632,"type1":6,"type2":8},"Deino":{"num":633,"type1":16,"type2":15},"Zweilous":{"num":634,"type1":16,"type2":15},"Hydreigon":{"num":635,"type1":16,"type2":15},"Larvesta":{"num":636,"type1":6,"type2":9},"Volcarona":{"num":637,"type1":6,"type2":9},"Cobalion":{"num":638,"type1":8,"type2":1},"Terrakion":{"num":639,"type1":5,"type2":1},"Virizion":{"num":640,"type1":11,"type2":1},"Tornadus":{"num":641,"type1":2,"type2":18},"Thundurus":{"num":642,"type1":12,"type2":2},"Reshiram":{"num":643,"type1":15,"type2":9},"Zekrom":{"num":644,"type1":15,"type2":12},"Landorus":{"num":645,"type1":4,"type2":2},"Kyurem":{"num":646,"type1":15,"type2":14},"Keldeo":{"num":647,"type1":10,"type2":1},"Meloetta":{"num":648,"type1":0,"type2":13},"Genesect":{"num":649,"type1":6,"type2":8},"Chespin":{"num":650,"type1":11,"type2":18},"Quilladin":{"num":651,"type1":11,"type2":18},"Chesnaught":{"num":652,"type1":11,"type2":1},"Fennekin":{"num":653,"type1":9,"type2":18},"Braixen":{"num":654,"type1":9,"type2":18},"Delphox":{"num":655,"type1":9,"type2":13},"Froakie":{"num":656,"type1":10,"type2":18},"Frogadier":{"num":657,"type1":10,"type2":18},"Greninja":{"num":658,"type1":10,"type2":16},"Bunnelby":{"num":659,"type1":0,"type2":18},"Diggersby":{"num":660,"type1":0,"type2":4},"Fletchling":{"num":661,"type1":0,"type2":2},"Fletchinder":{"num":662,"type1":9,"type2":2},"Talonflame":{"num":663,"type1":9,"type2":2},"Scatterbug":{"num":664,"type1":6,"type2":18},"Spewpa":{"num":665,"type1":6,"type2":18},"Vivillon":{"num":666,"type1":6,"type2":2},"Litleo":{"num":667,"type1":9,"type2":0},"Pyroar":{"num":668,"type1":9,"type2":0},"Flabébé":{"num":669,"type1":17,"type2":18},"Floette":{"num":670,"type1":17,"type2":18},"Florges":{"num":671,"type1":17,"type2":18},"Skiddo":{"num":672,"type1":11,"type2":18},"Gogoat":{"num":673,"type1":11,"type2":18},"Pancham":{"num":674,"type1":1,"type2":18},"Pangoro":{"num":675,"type1":1,"type2":16},"Furfrou":{"num":676,"type1":0,"type2":18},"Espurr":{"num":677,"type1":13,"type2":18},"Meowstic":{"num":678,"type1":13,"type2":18},"Honedge":{"num":679,"type1":8,"type2":7},"Doublade":{"num":680,"type1":8,"type2":7},"Aegislash":{"num":681,"type1":8,"type2":7},"Spritzee":{"num":682,"type1":17,"type2":18},"Aromatisse":{"num":683,"type1":17,"type2":18},"Swirlix":{"num":684,"type1":17,"type2":18},"Slurpuff":{"num":685,"type1":17,"type2":18},"Inkay":{"num":686,"type1":16,"type2":13},"Malamar":{"num":687,"type1":16,"type2":13},"Binacle":{"num":688,"type1":5,"type2":10},"Barbaracle":{"num":689,"type1":5,"type2":10},"Skrelp":{"num":690,"type1":3,"type2":10},"Dragalge":{"num":691,"type1":3,"type2":15},"Clauncher":{"num":692,"type1":10,"type2":18},"Clawitzer":{"num":693,"type1":10,"type2":18},"Helioptile":{"num":694,"type1":12,"type2":0},"Heliolisk":{"num":695,"type1":12,"type2":0},"Tyrunt":{"num":696,"type1":5,"type2":15},"Tyrantrum":{"num":697,"type1":5,"type2":15},"Amaura":{"num":698,"type1":5,"type2":14},"Aurorus":{"num":699,"type1":5,"type2":14},"Sylveon":{"num":700,"type1":17,"type2":18},"Hawlucha":{"num":701,"type1":1,"type2":2},"Dedenne":{"num":702,"type1":12,"type2":17},"Carbink":{"num":703,"type1":5,"type2":17},"Goomy":{"num":704,"type1":15,"type2":18},"Sliggoo":{"num":705,"type1":15,"type2":18},"Goodra":{"num":706,"type1":15,"type2":18},"Klefki":{"num":707,"type1":8,"type2":17},"Phantump":{"num":708,"type1":7,"type2":11},"Trevenant":{"num":709,"type1":7,"type2":11},"Pumpkaboo":{"num":710,"type1":7,"type2":11},"Gourgeist":{"num":711,"type1":7,"type2":11},"Bergmite":{"num":712,"type1":14,"type2":18},"Avalugg":{"num":713,"type1":14,"type2":18},"Noibat":{"num":714,"type1":2,"type2":15},"Noivern":{"num":715,"type1":2,"type2":15},"Xerneas":{"num":716,"type1":17,"type2":18},"Yveltal":{"num":717,"type1":16,"type2":2},"Zygarde":{"num":718,"type1":15,"type2":4},"Diancie":{"num":719,"type1":5,"type2":17},"Hoopa":{"num":720,"type1":13,"type2":7},"Volcanion":{"num":721,"type1":9,"type2":10},"Mega Venusaur":{"num":65539,"type1":11,"type2":3},"Mega Charizard X":{"num":65542,"type1":9,"type2":15},"Mega Blastoise":{"num":65545,"type1":10,"type2":18},"Mega Alakazam":{"num":65601,"type1":13,"type2":18},"Mega Gengar":{"num":65630,"type1":7,"type2":3},"Mega Kangaskhan":{"num":65651,"type1":0,"type2":18},"Mega Pinsir":{"num":65663,"type1":6,"type2":2},"Mega Gyarados":{"num":65666,"type1":10,"type2":16},"Mega Aerodactyl":{"num":65678,"type1":5,"type2":2},"Mega Mewtwo X":{"num":65686,"type1":13,"type2":1},"Spiky Pichu":{"num":65708,"type1":12,"type2":18},"Mega Ampharos":{"num":65717,"type1":12,"type2":15},"Unown-B":{"num":65737,"type1":13,"type2":18},"Mega Scizor":{"num":65748,"type1":6,"type2":8},"Mega Heracross":{"num":65750,"type1":6,"type2":1},"Mega Houndoom":{"num":65765,"type1":16,"type2":9},"Mega Tyranitar":{"num":65784,"type1":5,"type2":16},"Mega Blaziken":{"num":65793,"type1":9,"type2":1},"Mega Gardevoir":{"num":65818,"type1":13,"type2":17},"Mega Mawile":{"num":65839,"type1":8,"type2":17},"Mega Aggron":{"num":65842,"type1":8,"type2":18},"Mega Medicham":{"num":65844,"type1":1,"type2":13},"Mega Manectric":{"num":65846,"type1":12,"type2":18},"Castform-Snowy":{"num":65887,"type1":14,"type2":18},"Mega Banette":{"num":65890,"type1":7,"type2":18},"Mega Absol":{"num":65895,"type1":16,"type2":18},"Mega Latias":{"num":65916,"type1":15,"type2":13},"Mega Latios":{"num":65917,"type1":15,"type2":13},"Deoxys-A":{"num":65922,"type1":13,"type2":18},"Burmy-G":{"num":65948,"type1":6,"type2":18},"Wormadam-G":{"num":65949,"type1":6,"type2":4},"Cherrim-Sunshine":{"num":65957,"type1":11,"type2":18},"Shellos-East":{"num":65958,"type1":10,"type2":18},"Gastrodon-East":{"num":65959,"type1":10,"type2":4},"Mega Garchomp":{"num":65981,"type1":15,"type2":4},"Mega Lucario":{"num":65984,"type1":1,"type2":8},"Mega Abomasnow":{"num":65996,"type1":14,"type2":11},"Rotom-C":{"num":66015,"type1":12,"type2":11},"Giratina-O":{"num":66023,"type1":7,"type2":15},"Shaymin-S":{"num":66028,"type1":11,"type2":2},"Arceus-Fighting":{"num":66029,"type1":1,"type2":18},"Basculin-A":{"num":66086,"type1":10,"type2":18},"Darmanitan-D":{"num":66091,"type1":9,"type2":13},"Deerling-Summer":{"num":66121,"type1":0,"type2":11},"Sawsbuck-Summer":{"num":66122,"type1":0,"type2":11},"Tornadus-T":{"num":66177,"type1":2,"type2":18},"Thundurus-T":{"num":66178,"type1":12,"type2":2},"Landorus-T":{"num":66181,"type1":4,"type2":2},"Kyurem-W":{"num":66182,"type1":15,"type2":14},"Keldeo-R":{"num":66183,"type1":10,"type2":1},"Meloetta-S":{"num":66184,"type1":0,"type2":1},"Genesect-D":{"num":66185,"type1":6,"type2":8},"Vivillon-Icy Snow":{"num":66202,"type1":6,"type2":2},"Floette-EF":{"num":66206,"type1":17,"type2":18},"Meowstic-F":{"num":66214,"type1":13,"type2":18},"Aegislash-B":{"num":66217,"type1":8,"type2":7},"Pumpkaboo-S":{"num":66246,"type1":7,"type2":11},"Gourgeist-S":{"num":66247,"type1":7,"type2":11},"Xerneas-A":{"num":66252,"type1":17,"type2":18},"Mega Charizard Y":{"num":131078,"type1":9,"type2":2},"Mega Mewtwo Y":{"num":131222,"type1":13,"type2":18},"Unown-C":{"num":131273,"type1":13,"type2":18},"Castform-Rainy":{"num":131423,"type1":10,"type2":18},"Deoxys-D":{"num":131458,"type1":13,"type2":18},"Burmy-S":{"num":131484,"type1":6,"type2":18},"Wormadam-S":{"num":131485,"type1":6,"type2":8},"Rotom-H":{"num":131551,"type1":12,"type2":9},"Arceus-Flying":{"num":131565,"type1":2,"type2":18},"Deerling-Autumn":{"num":131657,"type1":0,"type2":11},"Sawsbuck-Autumn":{"num":131658,"type1":0,"type2":11},"Kyurem-B":{"num":131718,"type1":15,"type2":14},"Genesect-S":{"num":131721,"type1":6,"type2":8},"Vivillon-Archipelago":{"num":131738,"type1":6,"type2":2},"Pumpkaboo-L":{"num":131782,"type1":7,"type2":11},"Gourgeist-L":{"num":131783,"type1":7,"type2":11},"Unown-D":{"num":196809,"type1":13,"type2":18},"Deoxys-S":{"num":196994,"type1":13,"type2":18},"Rotom-F":{"num":197087,"type1":12,"type2":14},"Arceus-Poison":{"num":197101,"type1":3,"type2":18},"Deerling-Winter":{"num":197193,"type1":0,"type2":11},"Sawsbuck-Winter":{"num":197194,"type1":0,"type2":11},"Genesect-B":{"num":197257,"type1":6,"type2":8},"Vivillon-Continental":{"num":197274,"type1":6,"type2":2},"Pumpkaboo-XL":{"num":197318,"type1":7,"type2":11},"Gourgeist-XL":{"num":197319,"type1":7,"type2":11},"Unown-E":{"num":262345,"type1":13,"type2":18},"Castform-Sunny":{"num":262495,"type1":9,"type2":18},"Rotom-W":{"num":262623,"type1":12,"type2":10},"Arceus-Ground":{"num":262637,"type1":4,"type2":18},"Genesect-C":{"num":262793,"type1":6,"type2":8},"Vivillon-Elegant":{"num":262810,"type1":6,"type2":2},"Unown-F":{"num":327881,"type1":13,"type2":18},"Rotom-S":{"num":328159,"type1":12,"type2":2},"Arceus-Rock":{"num":328173,"type1":5,"type2":18},"Vivillon-Garden":{"num":328346,"type1":6,"type2":2},"Unown-G":{"num":393417,"type1":13,"type2":18},"Arceus-Bug":{"num":393709,"type1":6,"type2":18},"Vivillon-High Plains":{"num":393882,"type1":6,"type2":2},"Unown-H":{"num":458953,"type1":13,"type2":18},"Arceus-Ghost":{"num":459245,"type1":7,"type2":18},"Vivillon-Jungle":{"num":459418,"type1":6,"type2":2},"Unown-I":{"num":524489,"type1":13,"type2":18},"Arceus-Steel":{"num":524781,"type1":8,"type2":18},"Vivillon-Marine":{"num":524954,"type1":6,"type2":2},"Unown-J":{"num":590025,"type1":13,"type2":18},"Arceus-Fire":{"num":590317,"type1":9,"type2":18},"Vivillon-Modern":{"num":590490,"type1":6,"type2":2},"Unown-K":{"num":655561,"type1":13,"type2":18},"Arceus-Water":{"num":655853,"type1":10,"type2":18},"Vivillon-Monsoon":{"num":656026,"type1":6,"type2":2},"Unown-L":{"num":721097,"type1":13,"type2":18},"Arceus-Grass":{"num":721389,"type1":11,"type2":18},"Vivillon-Ocean":{"num":721562,"type1":6,"type2":2},"Unown-M":{"num":786633,"type1":13,"type2":18},"Arceus-Electric":{"num":786925,"type1":12,"type2":18},"Vivillon-Polar":{"num":787098,"type1":6,"type2":2},"Unown-N":{"num":852169,"type1":13,"type2":18},"Arceus-Psychic":{"num":852461,"type1":13,"type2":18},"Vivillon-River":{"num":852634,"type1":6,"type2":2},"Unown-O":{"num":917705,"type1":13,"type2":18},"Arceus-Ice":{"num":917997,"type1":14,"type2":18},"Vivillon-Sandstorm":{"num":918170,"type1":6,"type2":2},"Unown-P":{"num":983241,"type1":13,"type2":18},"Arceus-Dragon":{"num":983533,"type1":15,"type2":18},"Vivillon-Savannah":{"num":983706,"type1":6,"type2":2},"Unown-Q":{"num":1048777,"type1":13,"type2":18},"Arceus-Dark":{"num":1049069,"type1":16,"type2":18},"Vivillon-Sun":{"num":1049242,"type1":6,"type2":2},"Unown-R":{"num":1114313,"type1":13,"type2":18},"Arceus-Fairy":{"num":1114605,"type1":17,"type2":18},"Vivillon-Tundra":{"num":1114778,"type1":6,"type2":2},"Unown-S":{"num":1179849,"type1":13,"type2":18},"Arceus-???":{"num":1180141,"type1":18,"type2":18},"Vivillon-Fancy":{"num":1180314,"type1":6,"type2":2},"Unown-T":{"num":1245385,"type1":13,"type2":18},"Vivillon-Pokeball":{"num":1245850,"type1":6,"type2":2},"Unown-U":{"num":1310921,"type1":13,"type2":18},"Unown-V":{"num":1376457,"type1":13,"type2":18},"Unown-W":{"num":1441993,"type1":13,"type2":18},"Unown-X":{"num":1507529,"type1":13,"type2":18},"Unown-Y":{"num":1573065,"type1":13,"type2":18},"Unown-Z":{"num":1638601,"type1":13,"type2":18},"Unown-!":{"num":1704137,"type1":13,"type2":18},"Unown-?":{"num":1769673,"type1":13,"type2":18}};
var __types = {0:"Normal",1:"Fighting",2:"Flying",3:"Poison",4:"Ground",5:"Rock",6:"Bug",7:"Ghost",8:"Steel",9:"Fire",10:"Water",11:"Grass",12:"Electric",13:"Psychic",14:"Ice",15:"Dragon",16:"Dark",17:"Fairy",18:"???"};

var typeNames = jsonToArray(__types);

var typeTable =
[
	"2222212012222222222",
	"4211241042222142412",
	"2422214212241222222",
	"2221112102242222242",
	"2204241244214222222",
	"2142124214222242222",
	"2111222111242422412",
	"0222222422222422122",
	"2222242211121242242",
	"2222214241142241222",
	"2222442224112221222",
	"2211441211412221222",
	"2242022222411221222",
	"2424222212222122022",
	"2242422211142214222",
	"2222222212222224202",
	"2122222422222422112",
	"2421222211222224422",
	"2222222222222222222"
];

function abilityMod(type, pokemon)
{
	var ability = pokemon.ability;
	
	if (ability === "Wonder Guard")
	{
		var eff = typeEff(type, pokemon.type1) * typeEff(type, pokemon.type2);
		return eff > 1;
	}
	
	if (type === 4)
	{
		if (ability === "Levitate")
			return 0;
	}
	if (type === 9)
	{
		if (ability === "Flash Fire")
			return 0;
		if (ability === "Dry Skin")
			return 2;
	}
	if (type === 10)
	{
		if (ability === "Dry Skin" || ability === "Storm Drain" || ability === "Water Absorb")
			return 0;
	}
	if (type === 11)
	{
		if (ability === "Sap Sipper")
			return 0;
	}
	if (type === 12)
	{
		if (ability === "Lightningrod" || ability === "Motor Drive" || ability === "Volt Absorb")
			return 0;
	}

	return 1;
}

function element(name)
{
	return document.getElementById(name);
}

function analyze()
{
	var team = element("team").value;
	var pokes = team.replace(/\r/g, "").replace(/ \(m\)/gi, "").replace(/ \(f\)/gi, "").split("\n\n");
	var jpokes = {};
	
	for (var i = 0; i < pokes.length; i++)
	{
		try
		{
			var lines = pokes[i].trim().split("\n");
			var name = (lines[0].indexOf("@") !== -1 ? lines[0].substr(0, lines[0].lastIndexOf("@") - 1) : lines[0]);
			name = name.replace(/(.+)\((.+)\)/g, "$2");
			var item = (lines[0].indexOf("@") !== -1 ? lines[0].substr(lines[0].lastIndexOf("@") + 1) : "(No Item)");
			var ability = lines[1].substr(7);
			var evs = lines[2].substr(5).split(" / ");
			var nature = lines[3].substr(0, lines[3].indexOf(" "));
			var moves = [];
			var type1 = __pokemon[name].type1;
			var type2 = __pokemon[name].type2;
			
			for (var j = 4; j < lines.length; j++)
			{
				moves[j - 4] = __moves[lines[j].substr(2)];
			}
			
			jpokes[i] = { "name": name, "item": item, "ability": ability, "evs": evs, "nature": nature, "moves": moves, "type1": type1, "type2": type2 };
		}
		catch (e)
		{
			alert("There was a problem with Pokémon #" + (i + 1));
			return;
		}
	}
	
	var abilities = {};
	var moveTypes = [0,0,0];
	var defTypes = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var atkTypes = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	
	for (var poke in jpokes)
	{
		if (jpokes.hasOwnProperty(poke))
		{
			// time to actually do things //
			
			var p = jpokes[poke];
			
			for (var i = 0; i < 18; i++)
			{
				defTypes[i].push(typeEff(i, p.type1) * typeEff(i, p.type2) * abilityMod(i, p));
				
				for (var j = 0; j < p.moves.length; j++)
				{
					atkTypes[i].push(typeEff(p.moves[j].type, i));
				}
			}
			
			for (var i = 0; i < p.moves.length; i++)
			{
				moveTypes[p.moves[i].damageClass]++;
			}
		}
	}
	
	var output = $("#output").get(0);
	typeNames.removeAt(18);
	output.innerHTML = "";
	output.innerHTML += "<div id='types'></div><br />";
	var typeTable = "";
	var atkTable = "";
	typeTable += "<table id='typeTable'><tr><th rowspan='2'>Types</th><th colspan='6'>Defense (Pok&eacute;mon Types)</th><th colspan='4'>Offense (Move Types)</th></tr>\
		<tr><th>0x</th><th>0.25x</th><th>0.5x</th><th>1x</th><th>2x</th><th>4x</th>\
		<th>0x</th><th>0.5x</th><th>1x</th><th>2x</th></tr>";
	
	// 0, .25, .5, 1, 2, 4
	
	for (var i = 0; i < defTypes.length; i++)
	{
		typeTable += "<tr class='%1'><td>%1</td><td>%2</td><td>%3</td><td>%4</td><td>%5</td><td>%6</td><td>%7</td>".args
		(
			typeNames[i], 
			defTypes[i].count(0),
			defTypes[i].count(0.25),
			defTypes[i].count(0.5),
			defTypes[i].count(1),
			defTypes[i].count(2),
			defTypes[i].count(4)
		);
		
		typeTable += "<td>%1</td><td>%2</td><td>%3</td><td>%4</td></tr>".args
		(
			atkTypes[i].count(0),
			atkTypes[i].count(0.5),
			atkTypes[i].count(1),
			atkTypes[i].count(2)
		);
	}
	
	typeTable += "</table><br />";
	output.innerHTML += typeTable;
	output.innerHTML += "<div id='moveTypes'></div><br />";
	
	var defSums = [];
	var atkSums = [];
	
	for (var i = 0; i < 18; i++)
	{
		defSums.push(4 - defTypes[i].averaged());
		atkSums.push(atkTypes[i].averaged());
	}
	
	defSums = defSums.format("%i/4 * 100");
	atkSums = atkSums.format("%i/2 * 100");
	
	$('#types').highcharts
	({
		chart:
		{
			type: 'column'
		},
		title:
		{
			text: 'Type Matchups'
		},
		subtitle:
		{
			text: "Average Offense: 50% | Average Defense: 75% | Average Overall: 62.5%"
		},
		xAxis:
		{
			categories: typeNames,
			title:
			{
				text: null
			}
		},
		tooltip:
		{
			shared: true,
			headerFormat: '<span style="font-size:14px">{point.key}</span><table>',
			pointFormat: '<tr><td style="color:{series.color};padding:0"><b>{series.name}:</b> </td>' +
				'<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
			footerFormat: '</table>',
			backgroundColor: "rgba(255,255,255,0.95)",
			useHTML: true
		},
		plotOptions:
		{
			column:
			{
				pointPadding: 0,
				borderWidth: 0
			}
		},
		credits:
		{
			enabled: false
		},
		series:
		[
			{
				name: "Offense",
				data: atkSums,
				color: "#FF6666"
			},
			{
				name: "Defense",
				data: defSums,
				color: "#6666FF"
			},
			{
				name: "Overall",
				data: defSums.averagedWith(atkSums),
				color: "#FF66FF"
			}
		]
	});
	
	// moves //
	
	
	
	$('#moveTypes').highcharts
	({
		chart:
		{
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title:
		{
			text: 'Move Category Distribution'
		},
		tooltip:
		{
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
			headerFormat: '<span style="font-size:14px">{point.key}</span><br />',
		},
		plotOptions:
		{
			pie:
			{
				allowPointSelect: false,
				cursor: 'pointer',
				dataLabels:
				{
					enabled: false
				},
				showInLegend: true
			}
		},
		series:
		[
			{
				type: 'pie',
				name: 'Category Distribution',
				data:
				[
					["Status", moveTypes[0]],
					["Physical", moveTypes[1]],
					["Special", moveTypes[2]]
				]
			}
		],
		credits:
		{
			enabled: false
		}
	});
}

function typeEff(atype, dtype)
{
	return parseInt(typeTable[atype][dtype]) / 2;
}




