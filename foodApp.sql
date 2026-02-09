
-- TEMPLATE TABLE
-- KHÔNG TẠO - Chỉ để làm mẫu
CREATE TABLE IF NOT EXISTS `TABLE_TEMPLATE` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS `Users` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	-- mặc định luôn luôn có
	
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`fullName` VARCHAR(255),
	`password` VARCHAR(255),
	`avatar` TEXT,
	`age` INT,
	`totpSecret` VARCHAR(255),
	`googleId` VARCHAR(255),
	
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



CREATE TABLE IF NOT EXISTS `Orders` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	-- mặc định luôn luôn có
	
	`userId` INT,
	`foodId` INT,
	
	FOREIGN KEY (`userId`) REFERENCES `Users`(`id`),
	FOREIGN KEY (`foodId`) REFERENCES `Foods`(`id`),
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `Foods` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	-- mặc định luôn luôn có
	`name` VARCHAR(255),
	`image` TEXT,
	`price` FLOAT,
	`description` VARCHAR(255) DEFAULT "Chưa có thông tin",
	`type_id` INT,
	FOREIGN KEY (`type_id`) REFERENCES `Food_Type`(`id`),
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	
);

CREATE TABLE IF NOT EXISTS `Food_Type` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255),
	
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)


CREATE TABLE IF NOT EXISTS `Sub_Food` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`price` FLOAT,
	`food_id` INT,
	FOREIGN KEY (`food_id`) REFERENCES `Foods`(`id`),
	
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)



CREATE TABLE IF NOT EXISTS `Restaurant` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255),
	`image` VARCHAR(500),
	`description` VARCHAR(255),
	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS `Rate_Res` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`amount` INT,
	`date_rate` DATETIME,
	`user_id` INT,
	`res_id` INT,
	
	FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
	FOREIGN KEY (`res_id`) REFERENCES `Restaurant`(`id`),
	
	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS `Like_Res` (
	`id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	`date_like` DATETIME,
	
	`user_id` INT,
	`res_id` INT,
	
	FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
	FOREIGN KEY (`res_id`) REFERENCES `Restaurant`(`id`),
	
	-- mặc định luôn luôn có
	-- mặc định luôn luôn có
	`deletedBy` INT NOT NULL DEFAULT 0,
	`isDeleted` TINYINT(1) NOT NULL DEFAULT 0,
	`deletedAt` TIMESTAMP NULL DEFAULT NULL,
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



INSERT INTO `Users`(`email`, `fullName`) VALUES
					("A@gmail.com", "nguyen van A"),
					("B@gmail.com", "nguyen van B"),
					("C@gmail.com", "nguyen van C"),
					("D@gmail.com", "nguyen van D"),
					("E@gmail.com", "nguyen van E")
					
					
INSERT INTO Users (email, fullName, password, avatar, age)
VALUES
('user1@gmail.com', 'Nguyễn Văn A', 'hashed_password_1', NULL, 22),
('user2@gmail.com', 'Trần Thị B', 'hashed_password_2', NULL, 25),
('user3@gmail.com', 'Lê Văn C', 'hashed_password_3', NULL, 30);

					
INSERT INTO `Foods` (`name`, `description`) VALUES
					("gỏi gà", "được làm từ ga"),
					("gỏi vit", "được làm từ vịt"),
					("gỏi cá", "được làm từ cá"),
					("gỏi heo", "được làm từ heo")

INSERT INTO `Foods` (`name`) VALUES
					("gỏi vịt Trung Quốc")
					
					
INSERT INTO Food_Type (name)
VALUES
('Món chính'),
('Ăn vặt'),
('Nước uống');


INSERT INTO Foods (name, image, price, description, type_id)
VALUES
('Cơm gà', 'com_ga.jpg', 35000, 'Cơm gà xối mỡ', 1),
('Bánh tráng trộn', 'banh_trang.jpg', 20000, 'Ăn vặt Sài Gòn', 2),
('Trà sữa trân châu', 'tra_sua.jpg', 30000, 'Trà sữa full topping', 3);

INSERT INTO Sub_Food (name, price, food_id)
VALUES
('Thêm trứng', 5000, 1),
('Thêm gà', 10000, 1),
('Trân châu đen', 5000, 3),
('Pudding', 7000, 3);


INSERT INTO Restaurant (name, image, description)
VALUES
('NhÀ HÀNG ĐẠT', 'res1.jpg', 'Chuyên hải sản'),
('bé yeu', 'res2.jpg', 'Chuyên gà con');

INSERT INTO Orders (userId, foodId)
VALUES
(1, 1),
(1, 3),
(2, 2),
(4, 5);

INSERT INTO Rate_Res (amount, date_rate, user_id, res_id)
VALUES
(5, NOW(), 1, 1),
(4, NOW(), 2, 1),
(5, NOW(), 3, 2),
(3, NOW(), 2, 1);



INSERT INTO Like_Res (date_like, user_id, res_id)
VALUES
(NOW(), 1, 1),
(NOW(), 2, 2),
(NOW(), 1, 2),
(NOW(), 1, 3),
(NOW(), 5, 4),
(NOW(), 4, 2);



--		 BÀI TẬP SQL
--Tìm 5 người đã like nhà hàng nhiều nhất.
SELECT fullName, COUNT(Like_Res.user_id) AS `SL_like` FROM Users
INNER JOIN Like_Res
ON Like_Res.user_id = Users.id
GROUP BY user_id
ORDER BY `SL_like` DESC
LIMIT 5


-- Tìm 2 nhà hàng có lượt like nhiều nhất.
SELECT COUNT(Like_Res.res_id ) AS `Số lượt like`, `name`, `image` FROM Restaurant
INNER JOIN Like_Res ON Like_Res.res_id = Restaurant.id
GROUP BY res_id
ORDER BY `Số lượt like` DESC
LIMIT 2

-- Tìm người đã đặt hàng nhiều nhất.
SELECT COUNT(Orders.userId) AS `Số lần mua hàng`, fullName FROM Users
INNER JOIN Orders ON Orders.userId = Users.id
GROUP BY userId
ORDER BY `Số lần mua hàng` DESC
LIMIT 1

-- Tìm người dùng không hoạt động trong hệ thống (không đặt hàng, không like, không đánh giá nhà hàng).
SELECT Users.id,`email`, `fullName` FROM Users
LEFT JOIN Orders ON Orders.userId = Users.id AND Orders.isDeleted = 0
LEFT JOIN Like_Res ON Like_Res.user_id = Users.id AND Like_Res.isDeleted = 0
LEFT JOIN Rate_Res ON Rate_Res.user_id = Users.id AND Rate_Res.isDeleted = 0
WHERE Orders.userId IS NULL AND Like_Res.user_id is NULL and Rate_Res.user_id is NULL



