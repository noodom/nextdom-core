<?php
/* This file is part of NextDom.
 *
 * NextDom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * NextDom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with NextDom. If not, see <http://www.gnu.org/licenses/>.
 */

require_once(__DIR__ . '/../../../src/core.php');
require_once(__DIR__ . '/BaseControllerTest.php');

class EqLogicConfigureModalControllerTest extends BaseControllerTest
{
    public function setUp()
    {
    }

    public function tearDown()
    {
        if (isset($_GET['eqLogic_id'])) {
            unset($_GET['eqLogic_id']);
        }
    }


    public function testSimple()
    {
        $_GET['eqLogic_id'] = 1;
        ob_start();
        $result = \NextDom\Controller\Modals\EqLogicConfigure::get();
        $scriptResult = ob_get_clean();
        $this->assertContains('id="div_displayEqLogicConfigure"', $result);
        $this->assertContains('var eqLogicInfoSearchString = "%5BMy+Room%5D%5BTest+eqLogic%5D";', $scriptResult);
    }
}
