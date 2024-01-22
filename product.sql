-- 商品表（Product 表）

CREATE TABLE Product
(product_id CHAR(4) NOT NULL,
 product_name VARCHAR(100) NOT NULL,
 product_type VARCHAR(32) NOT NULL,
 sale_price INTEGER ,
 purchase_price INTEGER ,
 regist_date DATE ,
 PRIMARY KEY (product_id));

-- 向Product表中插入数据
INSERT INTO Product VALUES ('0001', 'T恤衫', '衣服',
1000, 500, '2009-09-20');
INSERT INTO Product VALUES ('0002', '打孔器', '办公用品',
500, 320, '2009-09-11');
INSERT INTO Product VALUES ('0003', '运动T恤', '衣服',
4000, 2800, NULL);
INSERT INTO Product VALUES ('0004', '菜刀', '厨房用具',
3000, 2800, '2009-09-20');
INSERT INTO Product VALUES ('0005', '高压锅', '厨房用具',
6800, 5000, '2009-01-15');
INSERT INTO Product VALUES ('0006', '叉子', '厨房用具',
500, NULL, '2009-09-20');
INSERT INTO Product VALUES ('0007', '擦菜板', '厨房用具',
880, 790, '2008-04-28');
INSERT INTO Product VALUES ('0008', '圆珠笔', '办公用品',
100, NULL,'2009-11-11');

-- 创建Chars表
CREATE TABLE Chars
(chr CHAR(3) NOT NULL,
PRIMARY KEY (chr));

INSERT INTO Chars VALUES ('1');
INSERT INTO Chars VALUES ('2');
INSERT INTO Chars VALUES ('3');
INSERT INTO Chars VALUES ('10');
INSERT INTO Chars VALUES ('11');
INSERT INTO Chars VALUES ('222');

-- 创建ProductIns表
CREATE TABLE ProductIns
(product_id CHAR(4) NOT NULL,
 product_name VARCHAR(100) NOT NULL,
 product_type VARCHAR(32) NOT NULL,
 sale_price INTEGER DEFAULT 0,
 purchase_price INTEGER ,
 regist_date DATE ,
 PRIMARY KEY (product_id));

INSERT INTO ProductIns (product_id, product_name, product_type, 
sale_price, purchase_price, regist_date) VALUES ('0001', 'T恤衫', 
'衣服', 1000, 500, '2009-09-20');
INSERT INTO ProductIns VALUES ('0002', '打孔器',
'办公用品', 500, 320, '2009-09-11');
INSERT INTO ProductIns VALUES ('0003', '运动T恤',
'衣服', 4000, 2800, NULL);
INSERT INTO ProductIns VALUES ('0004', '菜刀',
'厨房用具', 3000, 2800, '2009-09-20');
-- 多行INSERT （Oracle以外）
INSERT INTO ProductIns VALUES ('0002', '打孔器',
'办公用品', 500, 320, '2009-09-11'),
 ('0003', '运动T恤',
'衣服', 4000, 2800, NULL),
 ('0004', '菜刀',
'厨房用具', 3000, 2800, '2009-09-20');

-- 创建ProductCopy表
CREATE TABLE ProductCopy
(product_id CHAR(4) NOT NULL,
 product_name VARCHAR(100) NOT NULL,
 product_type VARCHAR(32) NOT NULL,
 sale_price INTEGER ,
 purchase_price INTEGER ,
 regist_date DATE ,
 PRIMARY KEY (product_id));

-- -- 将商品表中的数据复制到商品复制表中
-- INSERT INTO ProductCopy (product_id, product_name, product_type, 
-- sale_price, purchase_price, regist_date)
-- SELECT product_id, product_name, product_type, sale_price, 
-- purchase_price, regist_date
--  FROM Product;


-- 创建ProductType表
CREATE TABLE ProductType
(product_type VARCHAR(32) NOT NULL,
 sum_sale_price INTEGER ,
 sum_purchase_price INTEGER ,
 PRIMARY KEY (product_type));