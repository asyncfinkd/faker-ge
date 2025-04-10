# Faker-GE

Faker-GE is a powerful and comprehensive library for generating realistic Georgian fake data. Designed specifically for the Georgian context, this library helps developers, testers, and data scientists create authentic-looking test data that reflects Georgian naming conventions, address formats, phone number patterns, and more.
Whether you're building applications for the Georgian market, testing localization features, or need realistic Georgian data for demonstrations, Faker-GE provides an extensive collection of generators that produce data indistinguishable from real Georgian information.

## Why Faker-GE?

Most fake data generators focus on Western naming conventions and formats, leaving developers working with Georgian applications to create their own solutions. Faker-GE fills this gap by offering:

- Authentic Georgian names: Thousands of genuine Georgian first and last names
- Proper formatting: Personal IDs and phone numbers that follow Georgian standards
- Geographical accuracy: Real Georgian regions, cities, and street names
- Cultural relevance: Job titles, descriptions, and other content in Georgian

## Installation

```bash
npm install faker-ge
```

or

```bash
yarn add faker-ge
```

## Usage

```ts
import { faker } from "faker-ge";

// Generate a random Georgian full name
const name = faker.person.fullName();

// Generate a random Georgian personal ID
const personalId = faker.personalNumber.pid();

// Generate a random Georgian phone number
const phone = faker.phoneNumber.phone();

// Generate a random Georgian location
const region = faker.location.getRegion();
```

## Individual Modules

You can also import individual modules directly:

```ts
import { person } from "faker-ge/person";
import { personalNumber } from "faker-ge/personal_number";
import { phoneNumber } from "faker-ge/phone_number";
import { location } from "faker-ge/location";

// Use the modules directly
const name = person.fullName();
const pid = personalNumber.pid();
const phone = phoneNumber.phone();
const region = location.getRegion();
```

## API Reference

### Person Module

The person module allows you to generate realistic Georgian person data.

```ts
// Generate a random first name
faker.person.firstName(); // e.g., "გიორგი" (male) or "ანა" (female)

// Generate a random first name for a specific gender
faker.person.firstName("Male"); // e.g., "დავით"
faker.person.firstName("Female"); // e.g., "თამარ"

// Generate a random last name
faker.person.lastName(); // e.g., "ბერიძე"

// Generate a full name
faker.person.fullName(); // e.g., "ნიკა წიკლაური"
faker.person.fullName("Female"); // e.g., "მარიამ გელაშვილი"

// Generate a job title
const jobDescriptor = faker.person.jobDescriptor(); // e.g., "უფროსი"
const jobType = faker.person.jobType(); // e.g., "დეველოპერი"
console.log(`${jobDescriptor} ${jobType}`); // e.g., "უფროსი დეველოპერი"

// Generate a bio
faker.person.bio(); // e.g., "კონსულტანტი, რომელიც ეხმარება კლიენტებს პროდუქტის არჩევაში."

// Generate a zodiac sign
faker.person.zodiacSign(); // e.g., "ვერძი"
```

### Personal Number Module

Generate realistic Georgian personal identification numbers.

```ts
// Generate a random personal ID
faker.personalNumber.pid(); // e.g., "01234567890"

// Generate a personal ID with a specific prefix
faker.personalNumber.pid("02"); // e.g., "02345678901"
```

### Phone Number Module

Generate realistic Georgian phone numbers.

```ts
// Generate a random phone number
faker.phoneNumber.phone(); // e.g., "+995559123456"

// Generate a phone number for a specific provider
faker.phoneNumber.phone("Magti"); // e.g., "+995555123456"
faker.phoneNumber.phone("Silknet"); // e.g., "+995557123456"
faker.phoneNumber.phone("Geocell"); // e.g., "+995559123456"
faker.phoneNumber.phone("Beeline"); // e.g., "+995551123456"
```

### Location Module

Generate realistic Georgian locations.

```ts
// Generate a random region
faker.location.getRegion(); // e.g., "ქვემო ქართლი"

// Generate a random city
faker.location.getCity(); // e.g., "თბილისი"

// Generate a random street
faker.location.getStreet(); // e.g., "ბაღის ქუჩა"
```

# Use Cases

- Application Development: Populate your development environment with realistic Georgian data
- Testing: Create test cases with culturally appropriate data
- Demos and Presentations: Show your applications with authentic-looking Georgian information
- Data Science: Generate synthetic datasets for analysis and machine learning
- Education: Use in teaching environments to demonstrate Georgian data formats

# Why Use Faker-GE?

- Georgian-specific data: Unlike generic faker libraries, Faker-GE provides authentic Georgian names, locations, and formats.
- Realistic data: All generated data follows the correct formats and patterns used in Georgia.
- Easy to use: Simple and intuitive API that's easy to integrate into your projects.
- Flexible: Generate data with specific constraints or completely random.
- TypeScript support: Full TypeScript definitions for better development experience.
