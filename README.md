# Exercism

A collection of TypeScript exercises and solutions.

## Exercises

- [Atbash Cipher](./atbash-cipher)
- [Binary Search](./binary-search)
- [Bob](./bob)
- [Clock](./clock)
- [DnD Character](./dnd-character)
- [Grade School](./grade-school)
- [Hello World](./hello-world)
- [Leap](./leap)
- [Linked List](./linked-list)
- [List Ops](./list-ops)
- [Matrix](./matrix)
- [Panagram](./panagram)
- [Rational Numbers](./rational-numbers)
- [Resistor Color](./resistor-color)
- [Resistor Color Duo](./resistor-color-duo)
- [RNA Transcription](./rna-transcription)
- [Robot Name](./robot-name)
- [Secret Handshake](./secret-handshake)
- [Simple Cipher](./simple-cipher)
- [Space Age](./space-age)
- [Two Fer](./two-fer)
- [Wordy](./wordy)

## Usage

Go through the [setup instructions for TypeScript](http://exercism.io/languages/typescript) to install the necessary dependencies.

### Setup

Switch to an exercise folder and install the required dependencies:

```bash
yarn install
```

### Tests

Execute the tests with:

```bash
yarn test
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by changing `xit` to `it`.

### Tutorial

This section is a step-by-step guide to solving a simple [Hello World exercise](./hello-world).

This exercise has two files, `hello-world.ts` and `hello-world.test.ts`.

The first file is where you will write your code, the second is where the tests are defined.

The tests will check whether your code is doing the right thing. You don't need to be able to write a test suite from scratch, but it helps to understand what a test looks like, and what it is doing.

Open up the test file `hello-world.test.ts`. There is a single test inside:

```typescript
it('says hello world', () => {
  expect(hello()).toEqual('Hello, World!')
})
```

Run the test now, with the following command on the command-line:

```bash
$ yarn test
```

The test fails, which makes sense since you've not written any code yet.

The outpute looks like this:

```
    × says hello world (5ms)

  ● Hello World › says hello world

    expect(received).toEqual(expected)

    Expected: "Hello, World!"
    Received: "What's up doc 👋🏽?"

      4 |
      5 |   it('says hello world', () => {
    > 6 |     expect(hello()).toEqual('Hello, World!')
        |                     ^
      7 |   })
      8 | })

      at Object.it (hello-world.test.ts:6:32)
```

And these are those code lines with probable defects in the `hello-world.test.ts` file:

```typescript
    // In line 6
    expect(hello()).toEqual('Hello, World!')
                    ^
```

Hence the problem is with the `hello()` function call. We can see that the test is expecting `'Hello, World!'` as output, but instead is getting `'What's up doc 👋🏽?'`.

So let's check now this function in the `hello-worlds.ts` file:

```typescript
export function hello(): string {
  return "What's up doc 👋🏽?"
}
```

Now we see that the function returns the incorrect string, which is the reason for our failure. Let's fix this by changing the returned value:

```typescript
export function hello(): string {
  return 'Hello, World!'
}
```

Run the test again:

```bash
 PASS  ./hello-world.test.ts
  Hello World
    √ says hello world (4ms)
```

And it passes!
