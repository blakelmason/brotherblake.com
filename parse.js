const fs = require('fs')

const scripture = `2 Nevertheless, they did not long maintain an entire peace in the land, for there began to be a contention among the people concerning the chief judge Pahoran; for behold, there were a part of the people who desired that a few particular points of the law should be altered.

3 But behold, Pahoran would not alter nor suffer the law to be altered; therefore, he did not hearken to those who had sent in their voices with their petitions concerning the altering of the law.

4 Therefore, those who were desirous that the law should be altered were angry with him, and desired that he should no longer be chief judge over the land; therefore there arose a warm dispute concerning the matter, but not unto bloodshed.

5 And it came to pass that those who were desirous that Pahoran should be dethroned from the judgment-seat were called king-men, for they were desirous that the law should be altered in a manner to overthrow the free government and to establish a king over the land.

6 And those who were desirous that Pahoran should remain chief judge over the land took upon them the name of freemen; and thus was the division among them, for the freemen had sworn or covenanted to maintain their rights and the privileges of their religion by a free government.

7 And it came to pass that this matter of their contention was settled by the voice of the people. And it came to pass that the voice of the people came in favor of the freemen, and Pahoran retained the judgment-seat, which caused much rejoicing among the brethren of Pahoran and also many of the people of liberty, who also put the king-men to silence, that they durst not oppose but were obliged to maintain the cause of freedom.

8 Now those who were in favor of kings were those of high birth, and they sought to be kings; and they were supported by those who sought power and authority over the people.

9 But behold, this was a critical time for such contentions to be among the people of Nephi; for behold, Amalickiah had again stirred up the hearts of the people of the Lamanites against the people of the Nephites, and he was gathering together soldiers from all parts of his land, and arming them, and preparing for war with all diligence; for he had sworn to drink the blood of Moroni.

10 But behold, we shall see that his promise which he made was rash; nevertheless, he did prepare himself and his armies to come to battle against the Nephites.

11 Now his armies were not so great as they had hitherto been, because of the many thousands who had been slain by the hand of the Nephites; but notwithstanding their great loss, Amalickiah had gathered together a wonderfully great army, insomuch that he feared not to come down to the land of Zarahemla.

12 Yea, even Amalickiah did himself come down, at the head of the Lamanites. And it was in the twenty and fifth year of the reign of the judges; and it was at the same time that they had begun to settle the affairs of their contentions concerning the chief judge, Pahoran.

13 And it came to pass that when the men who were called king-men had heard that the Lamanites were coming down to battle against them, they were glad in their hearts; and they refused to take up arms, for they were so wroth with the chief judge, and also with the people of liberty, that they would not take up arms to defend their country.

14 And it came to pass that when Moroni saw this, and also saw that the Lamanites were coming into the borders of the land, he was exceedingly wroth because of the stubbornness of those people whom he had labored with so much diligence to preserve; yea, he was exceedingly wroth; his soul was filled with anger against them.

15 And it came to pass that he sent a petition, with the voice of the people, unto the governor of the land, desiring that he should read it, and give him (Moroni) power to compel those dissenters to defend their country or to put them to death.

16 For it was his first care to put an end to such contentions and dissensions among the people; for behold, this had been hitherto a cause of all their destruction. And it came to pass that it was granted according to the voice of the people.

17 And it came to pass that Moroni commanded that his army should go against those king-men, to pull down their pride and their nobility and level them with the earth, or they should take up arms and support the cause of liberty.

18 And it came to pass that the armies did march forth against them; and they did pull down their pride and their nobility, insomuch that as they did lift their weapons of war to fight against the men of Moroni they were hewn down and leveled to the earth.

19 And it came to pass that there were four thousand of those dissenters who were hewn down by the sword; and those of their leaders who were not slain in battle were taken and cast into prison, for there was no time for their trials at this period.

20 And the remainder of those dissenters, rather than be smitten down to the earth by the sword, yielded to the standard of liberty, and were compelled to hoist the title of liberty upon their towers, and in their cities, and to take up arms in defence of their country.

21 And thus Moroni put an end to those king-men, that there were not any known by the appellation of king-men; and thus he put an end to the stubbornness and the pride of those people who professed the blood of nobility; but they were brought down to humble themselves like unto their brethren, and to fight valiantly for their freedom from bondage.

22 Behold, it came to pass that while Moroni was thus breaking down the wars and contentions among his own people, and subjecting them to peace and civilization, and making regulations to prepare for war against the Lamanites, behold, the Lamanites had come into the land of Moroni, which was in the borders by the seashore.

23 And it came to pass that the Nephites were not sufficiently strong in the city of Moroni; therefore Amalickiah did drive them, slaying many. And it came to pass that Amalickiah took possession of the city, yea, possession of all their fortifications.

24 And those who fled out of the city of Moroni came to the city of Nephihah; and also the people of the city of Lehi gathered themselves together, and made preparations and were ready to receive the Lamanites to battle.

25 But it came to pass that Amalickiah would not suffer the Lamanites to go against the city of Nephihah to battle, but kept them down by the seashore, leaving men in every city to maintain and defend it.`
const arr = scripture.split(/\n/g)

arr.forEach((item, index) => item === '' && arr.splice(index, 1))

const htmlArr = []

arr.forEach((item, index) => {
  const spaceIndex = item.indexOf(' ')
  const verse = item.substr(0, spaceIndex)
  const shortened = item.substr(spaceIndex)
  const htmlVerse = `<p><strong>${verse}</strong>&nbsp;&nbsp;${shortened}</p>`
  htmlArr.push(htmlVerse)
})

const versesString = htmlArr.join('')

fs.writeFileSync('parsed.html', versesString)
