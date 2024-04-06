-- CreateTable
CREATE TABLE "Time" (
    "id" UUID NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "barberId" UUID NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scheduling" (
    "id" UUID NOT NULL,
    "timeId" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Scheduling_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Scheduling_timeId_key" ON "Scheduling"("timeId");

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scheduling" ADD CONSTRAINT "Scheduling_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scheduling" ADD CONSTRAINT "Scheduling_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "Time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
