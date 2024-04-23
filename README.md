# Home Assistant Lovelace Battery Entity Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

This card is a custom lovelace entity card for Home Assistant that displays the state of a battery, including
the state of charge (SOC), discharge and charge power.

It's currently in a pretty early stage and it's my first foray into HA card creation, so it's a bit rough around the 
edges and there's plenty to do.

![Battery Entity Card](docs/charging.png)
![Battery Entity Card](docs/discharging.png)

## Installation

Can be installed via HACS by adding the repository URL to the custom repositories in HACS.

## TODO:

* (done) Convert to Typescript
* (done) Work out how to add to HACS
* Add support for single charge/discharge sensor
* Add robustness against missing sensors
* Add toggle options for some of the display elements
* Add SOC in the battery itself
* Add option to have charge cable on the right or discharge cable on left
* Add colour configuration
* i18n
* Add sources/sinks for charge/discharge
