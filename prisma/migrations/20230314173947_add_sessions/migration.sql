-- CreateTable
CREATE TABLE `PanelUserSession` (
    `token` VARCHAR(191) NOT NULL,
    `panelUserId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClientSession` (
    `token` VARCHAR(191) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PanelUserSession` ADD CONSTRAINT `PanelUserSession_panelUserId_fkey` FOREIGN KEY (`panelUserId`) REFERENCES `PanelUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClientSession` ADD CONSTRAINT `ClientSession_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
