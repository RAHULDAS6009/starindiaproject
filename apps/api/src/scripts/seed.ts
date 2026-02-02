import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create Super Admin
  const adminPassword = await bcrypt.hash('Admin@123', 12);
  const superAdmin = await prisma.user.upsert({
    where: { email: 'admin@starindia.com' },
    update: {},
    create: {
      name: 'Super Admin',
      email: 'admin@starindia.com',
      passwordHash: adminPassword,
      role: UserRole.SUPER_ADMIN,
      verified: true,
    },
  });

  console.log('✅ Created Super Admin:', superAdmin.email);

  // Create Sub Admin
  const subAdminPassword = await bcrypt.hash('SubAdmin@123', 12);
  const subAdmin = await prisma.user.upsert({
    where: { email: 'subadmin@starindia.com' },
    update: {},
    create: {
      name: 'Sub Admin',
      email: 'subadmin@starindia.com',
      passwordHash: subAdminPassword,
      role: UserRole.ADMIN,
      verified: true,
    },
  });

  console.log('✅ Created Sub Admin:', subAdmin.email);

  // Create Demo Artist
  const artistPassword = await bcrypt.hash('Artist@123', 12);
  const artist = await prisma.user.upsert({
    where: { email: 'artist@demo.com' },
    update: {},
    create: {
      name: 'Demo Artist',
      email: 'artist@demo.com',
      passwordHash: artistPassword,
      role: UserRole.ARTIST,
      verified: true,
      bio: 'Professional actor and performer',
    },
  });

  console.log('✅ Created Demo Artist:', artist.email);

  // Create Demo Production
  const productionPassword = await bcrypt.hash('Production@123', 12);
  const production = await prisma.user.upsert({
    where: { email: 'production@demo.com' },
    update: {},
    create: {
      name: 'Demo Production',
      email: 'production@demo.com',
      passwordHash: productionPassword,
      role: UserRole.PRODUCTION,
      verified: true,
    },
  });

  console.log('✅ Created Demo Production:', production.email);

  // Create Demo General User
  const userPassword = await bcrypt.hash('User@123', 12);
  const user = await prisma.user.upsert({
    where: { email: 'user@demo.com' },
    update: {},
    create: {
      name: 'Demo User',
      email: 'user@demo.com',
      passwordHash: userPassword,
      role: UserRole.GENERAL_USER,
    },
  });

  console.log('✅ Created Demo User:', user.email);

  console.log('\n📝 Demo Credentials:');
  console.log('Super Admin: admin@starindia.com / Admin@123');
  console.log('Sub Admin: subadmin@starindia.com / SubAdmin@123');
  console.log('Artist: artist@demo.com / Artist@123');
  console.log('Production: production@demo.com / Production@123');
  console.log('User: user@demo.com / User@123');
  console.log('\n✨ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

