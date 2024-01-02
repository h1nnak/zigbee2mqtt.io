"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[41602],{144047:(e,o,t)=>{t.r(o),t.d(o,{data:()=>a});const a=JSON.parse('{"key":"v-49bb88f8","path":"/devices/SR-ZG9092A.html","title":"Sunricher SR-ZG9092A control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG9092A control via MQTT","description":"Integrate your Sunricher SR-ZG9092A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-01T15:06:58.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Outdoor temperature (numeric)","slug":"outdoor-temperature-numeric","link":"#outdoor-temperature-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Away mode (binary)","slug":"away-mode-binary","link":"#away-mode-binary","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Lcd brightness (enum)","slug":"lcd-brightness-enum","link":"#lcd-brightness-enum","children":[]},{"level":3,"title":"Button vibration level (enum)","slug":"button-vibration-level-enum","link":"#button-vibration-level-enum","children":[]},{"level":3,"title":"Floor sensor type (enum)","slug":"floor-sensor-type-enum","link":"#floor-sensor-type-enum","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Powerup status (enum)","slug":"powerup-status-enum","link":"#powerup-status-enum","children":[]},{"level":3,"title":"Floor sensor calibration (numeric)","slug":"floor-sensor-calibration-numeric","link":"#floor-sensor-calibration-numeric","children":[]},{"level":3,"title":"Dry time (numeric)","slug":"dry-time-numeric","link":"#dry-time-numeric","children":[]},{"level":3,"title":"Mode after dry (enum)","slug":"mode-after-dry-enum","link":"#mode-after-dry-enum","children":[]},{"level":3,"title":"Temperature display (enum)","slug":"temperature-display-enum","link":"#temperature-display-enum","children":[]},{"level":3,"title":"Window open check (numeric)","slug":"window-open-check-numeric","link":"#window-open-check-numeric","children":[]},{"level":3,"title":"Hysterersis (numeric)","slug":"hysterersis-numeric","link":"#hysterersis-numeric","children":[]},{"level":3,"title":"Display auto off enabled (enum)","slug":"display-auto-off-enabled-enum","link":"#display-auto-off-enabled-enum","children":[]},{"level":3,"title":"Alarm airtemp overvalue (numeric)","slug":"alarm-airtemp-overvalue-numeric","link":"#alarm-airtemp-overvalue-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1704183356000},"filePathRelative":"devices/SR-ZG9092A.md"}')},233674:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var a=t(166252);const i=(0,a._)("h1",{id:"sunricher-sr-zg9092a",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#sunricher-sr-zg9092a","aria-hidden":"true"},"#"),(0,a.Uk)(" Sunricher SR-ZG9092A")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SR-ZG9092A")],-1),r=(0,a._)("td",null,"Vendor",-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Touch thermostat")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"outdoor_temperature, climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state), away_mode, child_lock, power, current, voltage, energy, lcd_brightness, button_vibration_level, floor_sensor_type, sensor, powerup_status, floor_sensor_calibration, dry_time, mode_after_dry, temperature_display, window_open_check, hysterersis, display_auto_off_enabled, alarm_airtemp_overvalue, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG9092A.jpg",alt:"Sunricher SR-ZG9092A"})])],-1),s=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),h=(0,a.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="outdoor-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#outdoor-temperature-numeric" aria-hidden="true">#</a> Outdoor temperature (numeric)</h3><p>Current temperature measured from the floor sensor. Value can be found in the published state on the <code>outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;outdoor_temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>0</code> and <code>40</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-3</code> and the maximum value is <code>3</code> with a step size of <code>0.1</code>.</li></ul><h3 id="away-mode-binary" tabindex="-1"><a class="header-anchor" href="#away-mode-binary" aria-hidden="true">#</a> Away mode (binary)</h3><p>Enable/disable away mode. Value can be found in the published state on the <code>away_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;away_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> away mode is ON, if <code>OFF</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child lock (binary)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>UNLOCK</code> child lock is ON, if <code>LOCK</code> OFF.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="lcd-brightness-enum" tabindex="-1"><a class="header-anchor" href="#lcd-brightness-enum" aria-hidden="true">#</a> Lcd brightness (enum)</h3><p>OLED brightness when operating the buttons. Default: Medium.. Value can be found in the published state on the <code>lcd_brightness</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;lcd_brightness&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lcd_brightness&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>mid</code>, <code>high</code>.</p><h3 id="button-vibration-level-enum" tabindex="-1"><a class="header-anchor" href="#button-vibration-level-enum" aria-hidden="true">#</a> Button vibration level (enum)</h3><p>Key beep volume and vibration level. Default: Low.. Value can be found in the published state on the <code>button_vibration_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;button_vibration_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;button_vibration_level&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>low</code>, <code>high</code>.</p><h3 id="floor-sensor-type-enum" tabindex="-1"><a class="header-anchor" href="#floor-sensor-type-enum" aria-hidden="true">#</a> Floor sensor type (enum)</h3><p>Type of the external floor sensor. Default: NTC 10K/25.. Value can be found in the published state on the <code>floor_sensor_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_sensor_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;floor_sensor_type&quot;: NEW_VALUE}</code>. The possible values are: <code>10k</code>, <code>15k</code>, <code>50k</code>, <code>100k</code>, <code>12k</code>.</p><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum" aria-hidden="true">#</a> Sensor (enum)</h3><p>The sensor used for heat control. Default: Room Sensor.. Value can be found in the published state on the <code>sensor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>air</code>, <code>floor</code>, <code>both</code>.</p><h3 id="powerup-status-enum" tabindex="-1"><a class="header-anchor" href="#powerup-status-enum" aria-hidden="true">#</a> Powerup status (enum)</h3><p>The mode after a power reset. Default: Previous Mode.. Value can be found in the published state on the <code>powerup_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;powerup_status&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;powerup_status&quot;: NEW_VALUE}</code>. The possible values are: <code>default</code>, <code>last_status</code>.</p><h3 id="floor-sensor-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#floor-sensor-calibration-numeric" aria-hidden="true">#</a> Floor sensor calibration (numeric)</h3><p>The tempearatue calibration for the external floor sensor, between -3 and 3 in 0.1°C. Default: 0.. Value can be found in the published state on the <code>floor_sensor_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_sensor_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;floor_sensor_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-3</code> and the maximum value is <code>3</code>. The unit of this value is <code>°C</code>.</p><h3 id="dry-time-numeric" tabindex="-1"><a class="header-anchor" href="#dry-time-numeric" aria-hidden="true">#</a> Dry time (numeric)</h3><p>The duration of Dry Mode, between 5 and 100 minutes. Default: 5.. Value can be found in the published state on the <code>dry_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;dry_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;dry_time&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>100</code>. The unit of this value is <code>min</code>.</p><h3 id="mode-after-dry-enum" tabindex="-1"><a class="header-anchor" href="#mode-after-dry-enum" aria-hidden="true">#</a> Mode after dry (enum)</h3><p>The mode after Dry Mode. Default: Auto.. Value can be found in the published state on the <code>mode_after_dry</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mode_after_dry&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode_after_dry&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>manual</code>, <code>auto</code>, <code>away</code>.</p><h3 id="temperature-display-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-enum" aria-hidden="true">#</a> Temperature display (enum)</h3><p>The temperature on the display. Default: Room Temperature.. Value can be found in the published state on the <code>temperature_display</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display&quot;: NEW_VALUE}</code>. The possible values are: <code>room</code>, <code>floor</code>.</p><h3 id="window-open-check-numeric" tabindex="-1"><a class="header-anchor" href="#window-open-check-numeric" aria-hidden="true">#</a> Window open check (numeric)</h3><p>The threshold to detect window open, between 0.0 and 8.0 in 0.5 °C. Default: 0 (disabled).. Value can be found in the published state on the <code>window_open_check</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_check&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_open_check&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>8</code>. The unit of this value is <code>°C</code>.</p><h3 id="hysterersis-numeric" tabindex="-1"><a class="header-anchor" href="#hysterersis-numeric" aria-hidden="true">#</a> Hysterersis (numeric)</h3><p>Hysteresis setting, between 0.5 and 2 in 0.1 °C. Default: 0.5.. Value can be found in the published state on the <code>hysterersis</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;hysterersis&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;hysterersis&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>2</code>. The unit of this value is <code>°C</code>.</p><h3 id="display-auto-off-enabled-enum" tabindex="-1"><a class="header-anchor" href="#display-auto-off-enabled-enum" aria-hidden="true">#</a> Display auto off enabled (enum)</h3><p>Value can be found in the published state on the <code>display_auto_off_enabled</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_auto_off_enabled&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_auto_off_enabled&quot;: NEW_VALUE}</code>. The possible values are: <code>disabled</code>, <code>enabled</code>.</p><h3 id="alarm-airtemp-overvalue-numeric" tabindex="-1"><a class="header-anchor" href="#alarm-airtemp-overvalue-numeric" aria-hidden="true">#</a> Alarm airtemp overvalue (numeric)</h3><p>Room temperature alarm threshold, between 20 and 60 in °C. 0 means disabled. Default: 45.. Value can be found in the published state on the <code>alarm_airtemp_overvalue</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_airtemp_overvalue&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_airtemp_overvalue&quot;: NEW_VALUE}</code>. The minimal value is <code>20</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',47),p={},m=(0,t(983744).Z)(p,[["render",function(e,o){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),i,(0,a._)("table",null,[d,(0,a._)("tbody",null,[c,(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(t,{to:"/supported-devices/#v=Sunricher"},{default:(0,a.w5)((()=>[(0,a.Uk)("Sunricher")])),_:1})])]),n,u,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),s,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);