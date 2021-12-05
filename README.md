# alts-to-bitwarden
Add alts from certain websites to your Bitwarden vault.

## Use Case
You can buy alts from a website like [alts.top](https://alts.top) and easily import them into your Bitwarden vault.

## Installation

```
git clone https://github.com/tacohitbox/alts-to-bitwarden
cd alts-to-bitwarden
npm i
npm link
```

If you're on Linux, make sure the last line is ``sudo``'d.

## Usage 

The package can be called by either ``alts-to-bitwarden`` or ``alts-bw``.

```
alts-bw ./text-file.txt
```

It then outputs the data in a file (``./export.json``) inside the folder you ran the command in

## Optional Parameters

### ``--uri`` Parameter

Adds URI matches to the data you import. You can add multiple URIs using commas (see Example 2)

Example 1 

```
alts-bw ./text-file.txt --uri https://github.com
```

Example 2 

```
alts-bw ./text-file.txt --uri https://github.com,https://gitlab.com
```