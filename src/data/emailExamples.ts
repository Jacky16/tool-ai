const emailExamples = [
  {
    text: "Go until jurong point, crazy.. Available only in bugis n great world la e buffet... Cine there got amore wat...",
    label: "ham",
  },
  { text: "Ok lar... Joking wif u oni...", label: "ham" },
  {
    text: "Did you catch the bus ? Are you frying an egg ? Did you make a tea? Are you eating your mom's left over dinner ? Do you feel my Love ?",
    label: "ham",
  },
  {
    text: "FreeMsg Hey there darling it's been 3 week's now and no word back! I'd like some fun you up for it still? Tb ok! XxX std chgs to send, £1.50 to rcv",
    label: "spam",
  },
  {
    text: "Wait that's still not all that clear, were you not sure about me being sarcastic or that that's why x doesn't want to live with us",
    label: "ham",
  },
  {
    text: "Had your mobile 11 months or more? U R entitled to Update to the latest colour mobiles with camera for Free! Call The Mobile Update Co FREE on 08002986030",
    label: "spam",
  },
  {
    text: "SIX chances to win CASH! From 100 to 20,000 pounds txt> CSH11 and send to 87575. Cost 150p/day, 6days, 16+ TsandCs apply Reply HL 4 info",
    label: "spam",
  },
  { text: "I see the letter B on my car", label: "ham" },
  {
    text: "XXXMobileMovieClub: To use your credit, click the WAP link in the next txt message or click here>> http://wap. xxxmobilemovieclub.com?n=QJKGIGHJJGCBL",
    label: "spam",
  },
  {
    text: "England v Macedonia - dont miss the goals/team news. Txt ur national team to 87077 eg ENGLAND to 87077 Try:WALES, SCOTLAND 4txt/ú1.20 POBOXox36504W45WQ 16+",
    label: "spam",
  },
  { text: "Yes..gauti and sehwag out of odi series.", label: "ham" },
  {
    text: "07732584351 - Rodger Burns - MSG = We tried to call you re your reply to our sms for a free nokia mobile + free camcorder. Please call now 08000930705 for delivery tomorrow",
    label: "spam",
  },
  {
    text: "SMS. ac Sptv: The New Jersey Devils and the Detroit Red Wings play Ice Hockey. Correct or Incorrect? End? Reply END SPTV",
    label: "spam",
  },
  {
    text: "Congrats! 1 year special cinema pass for 2 is yours. call 09061209465 now! C Suprman V, Matrix3, StarWars3, etc all 4 FREE! bx420-ip4-5we. 150pm. Dont miss out!",
    label: "spam",
  },
  { text: "Am not interested to do like that.", label: "ham" },
  {
    text: "Urgent UR awarded a complimentary trip to EuroDisinc Trav, Aco&Entry41 Or £1000. To claim txt DIS to 87121 18+6*£1.50(moreFrmMob. ShrAcomOrSglSuplt)10, LS1 3AJ",
    label: "spam",
  },
  {
    text: 'Did you hear about the new "Divorce Barbie"? It comes with all of Ken\'s stuff!',
    label: "spam",
  },
  {
    text: "Please call our customer service representative on 0800 169 6031 between 10am-9pm as you have WON a guaranteed £1000 cash or £5000 prize!",
    label: "spam",
  },
  { text: "I am waiting machan. Call me once you free.", label: "ham" },
  {
    text: "GENT! We are trying to contact you. Last weekends draw shows that you won a £1000 prize GUARANTEED. Call 09064012160. Claim Code K52. Valid 12hrs only. 150ppm",
    label: "spam",
  },
  {
    text: "You are a winner U have been specially selected 2 receive £1000 or a 4* holiday (flights inc) speak to a live operator 2 claim 0871277810910p/min (18+)",
    label: "spam",
  },
  {
    text: "PRIVATE! Your 2004 Account Statement for 07742676969 shows 786 unredeemed Bonus Points. To claim call 08719180248 Identifier Code: 45239 Expires",
    label: "spam",
  },
  {
    text: "URGENT! Your Mobile No. was awarded £2000 Bonus Caller Prize on 5/9/03 This is our final try to contact U! Call from Landline 09064019788 BOX42WR29C, 150PPM",
    label: "spam",
  },
  {
    text: "Todays Voda numbers ending 7548 are selected to receive a $350 award. If you have a match please call 08712300220 quoting claim code 4041 standard rates app",
    label: "spam",
  },
  {
    text: "Sunshine Quiz Wkly Q! Win a top Sony DVD player if u know which country the Algarve is in? Txt ansr to 82277. £1.50 SP:Tyrone",
    label: "spam",
  },
  {
    text: "Want 2 get laid tonight? Want real Dogging locations sent direct 2 ur mob? Join the UK's largest Dogging Network bt Txting GRAVEL to 69888! Nt. ec2a. 31p.msg@150p",
    label: "spam",
  },
  {
    text: "You'll not rcv any more msgs from the chat svc. For FREE Hardcore services text GO to: 69988 If u get nothing u must Age Verify with yr network & try again",
    label: "spam",
  },
  {
    text: "FreeMsg Why haven't you replied to my text? I'm Randy, sexy, female and live local. Luv to hear from u. Netcollex Ltd 08700621170150p per msg reply Stop to end",
    label: "spam",
  },
  {
    text: 'Today is "song dedicated day.." Which song will u dedicate for me? Send this to all ur valuable frnds but first rply me...',
    label: "ham",
  },
  {
    text: "You are a winner U have been specially selected 2 receive £1000 cash or a 4* holiday (flights inc) speak to a live operator 2 claim 0871277810810",
    label: "spam",
  },
  {
    text: "-PLS STOP bootydelious (32/F) is inviting you to be her friend. Reply YES-434 or NO-434 See her: www.SMS.ac/u/bootydelious STOP? Send STOP FRND to 62468",
    label: "spam",
  },
  { text: "Yes see ya not on the dot", label: "ham" },
  {
    text: "URGENT! We are trying to contact you. Last weekends draw shows that you have won a £900 prize GUARANTEED. Call 09061701939. Claim code S89. Valid 12hrs only",
    label: "spam",
  },
  { text: "No calls..messages..missed calls", label: "spam" },
  {
    text: "Are you unique enough? Find out from 30th August. www.areyouunique.co.uk",
    label: "spam",
  },
  {
    text: "500 New Mobiles from 2004, MUST GO! Txt: NOKIA to No: 89545 & collect yours today!From ONLY £1 www.4-tc.biz 2optout 087187262701.50gbp/mtmsg18",
    label: "spam",
  },
  {
    text: "Yup... From what i remb... I think should be can book...",
    label: "ham",
  },
  {
    text: "Text & meet someone sexy today. U can find a date or even flirt its up to U. Join 4 just 10p. REPLY with NAME & AGE eg Sam 25. 18 -msg recd@thirtyeight pence",
    label: "spam",
  },
  {
    text: "U 447801259231 have a secret admirer who is looking 2 make contact with U-find out who they R*reveal who thinks UR so special-call on 09058094597",
    label: "spam",
  },
  {
    text: "hi baby im cruisin with my girl friend what r u up 2? give me a call in and hour at home if thats alright or fone me on this fone now love jenny xxx",
    label: "ham",
  },
  {
    text: "We tried to contact you re your reply to our offer of a Video Handset? 750 anytime networks mins? UNLIMITED TEXT? Camcorder? Reply or call 08000930705 NOW",
    label: "spam",
  },
  {
    text: "Hey I am really horny want to chat or see me naked text hot to 69698 text charged at 150pm to unsubscribe text stop 69698",
    label: "spam",
  },
  {
    text: "Ur ringtone service has changed! 25 Free credits! Go to club4mobiles.com to choose content now! Stop? txt CLUB STOP to 87070. 150p/wk Club4 PO Box1146 MK45 2WT",
    label: "spam",
  },
  { text: "U don't remember that old commercial?", label: "ham" },
  {
    text: "HMV BONUS SPECIAL 500 pounds of genuine HMV vouchers to be won. Just answer 4 easy questions. Play Now! Send HMV to 86688 More info:www.100percent-real.com",
    label: "spam",
  },
  {
    text: "T-Mobile customer you may now claim your FREE CAMERA PHONE upgrade & a pay & go sim card for your loyalty. Call on 0845 021 3680.Offer ends 28thFeb.T&C's apply",
    label: "spam",
  },
  {
    text: "SMS. ac Blind Date 4U!: Rodds1 is 21/m from Aberdeen, United Kingdom. Check Him out http://img. sms. ac/W/icmb3cktz8r7!-4 no Blind Dates send HIDE",
    label: "spam",
  },
  {
    text: "K, I might come by tonight then if my class lets out early",
    label: "ham",
  },
  {
    text: "Think ur smart ? Win £200 this week in our weekly quiz, text PLAY to 85222 now!T&Cs WinnersClub PO BOX 84, M26 3UZ. 16+. GBP1.50/week",
    label: "spam",
  },
  {
    text: "December only! Had your mobile 11mths+? You are entitled to update to the latest colour camera mobile for Free! Call The Mobile Update Co FREE on 08002986906",
    label: "spam",
  },
];

export default emailExamples;
