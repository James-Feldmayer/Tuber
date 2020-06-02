
/*USERS-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO USERS(USERS_ID, GUIDE_ID, TOURIST_ID, PASSWORD, FIRSTNAME, LASTNAME) VALUES('DrNoobopolis', 1, 1, 'P3NIZ', 'James', 'Feldmayer');
INSERT INTO USERS(USERS_ID, GUIDE_ID, TOURIST_ID, PASSWORD, FIRSTNAME, LASTNAME) VALUES('ExampleTourist', 2, 2, 'QQ', 'John', 'Smith');

GO

/*ADMINS-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO ADMINS(ADMINS_ID, PASSWORD) VALUES('MrSeriousAmin', 'vewyStwongPSwrd');
INSERT INTO ADMINS(ADMINS_ID, PASSWORD) VALUES('GayMod1', 'uWu');

GO

/*TOUR-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO TOUR(TOUR_ID, GUIDE_ID, TOUR_TITLE, TOUR_DESCRIPTION, LATITUDE, LONGITUDE, AGGREGATE_SCORE) VALUES(1, 1, 'The Crib', 'Welcome to big feldys fuck shack', -34.054370, 151.137090, 8.2);
INSERT INTO TOUR(TOUR_ID, GUIDE_ID, TOUR_TITLE, TOUR_DESCRIPTION, LATITUDE, LONGITUDE, AGGREGATE_SCORE) VALUES(2, 1, 'Pooperoo', 'The ocean is your toilet', 15, 90, 2);

GO

/*SESSION-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO SESSION(SESSION_ID, SESSION_DATETIME, TOUR_ID) VALUES(1, '1998-01-01 23:59:59', 2);
INSERT INTO SESSION(SESSION_ID, SESSION_DATETIME, TOUR_ID) VALUES(2, '1920-11-02 11:30:10', 2);

GO

/*BOOKING-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO BOOKING(SESSION_ID, TOURIST_ID, PRICE, BOOKING_STATE) VALUES(1, 2, 100.10, 'Booked');

GO

/*ISSUE-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO ISSUE(SESSION_ID, TOURIST_ID, ADMINS_ID, ISSUE_DATETIME, ISSUE_DESCRIPTION, ISSUE_STATUS, ISSUE_SUBJECT) VALUES(1, 2, 'GayMod1', '1998-01-02 12:0:30', 'This is all the stuff', 'Pending', 'He peed on me');

GO

/*GUIDEMESSAGE-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO GUIDEMESSAGE(GUIDE_MESSAGE_ID, TOUR_ID, TOURIST_ID, GUIDE_ID, GUIDE_DATETIME, GUIDE_SUBJECT, GUIDE_CONTENT) VALUES(1, 1, 2, 1, '1998-01-01 23:59:59', 'example subject', 'example content'); 

GO

/*TOURISTMESSAGE-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO TOURISTMESSAGE(TOURIST_MESSAGE_ID, TOUR_ID, TOURIST_ID, GUIDE_ID, TOURIST_DATETIME, TOURIST_SUBJECT, TOURIST_CONTENT) VALUES(1, 1, 2, 1, '1998-01-01 23:59:59', 'example subject', 'example content'); 

GO

/*ADMINSMESSAGE-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO ADMINSMESSAGE(ADMINS_MESSAGE_ID, TOUR_ID, TOURIST_ID, GUIDE_ID, ADMINS_ID, ADMINS_DATETIME, ADMINS_SUBJECT, ADMINS_CONTENT) VALUES(1, 1, 2, 1, 'MrSeriousAmin', '1998-01-01 23:59:59', 'example subject', 'example content'); 

GO

/*REVIEW-----------------------------------------------------------------------------------------------------------------*/
INSERT INTO REVIEW(TOURIST_ID, TOUR_ID, SCORE, REVIEW_SUBJECT, REVIEW_DESCRIPTION) VALUES(2, 1, 1.0, 'Bad', 'He peed on me');																			  

GO
