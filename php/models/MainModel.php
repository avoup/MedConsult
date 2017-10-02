<?php

class MainModel {
	private $sql;
        private $error;

	function __construct() {
		$this->sql = new sql();
	}
        
        function getBodyParts($position) {
            $db = $this->sql;
            
            $query = "select * from t_body_parts b where b.position in (0,:position)";
            $params = array(0 => array('name' => ':position', 'value' => $position, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1));
            
            return $db->execStatement($query, $params);      
        }
        
        function getSubBodyParts($id, $position) {
            $position = isset($_REQUEST['position']) ? $_REQUEST['position'] : 1;
 
            $db = $this->sql;
            
            $query = "SELECT s.id, s.name FROM t_body_map m, t_sub_body_parts s
                        where m.sub_body_parts_id = s.id
                          and m.body_parts_id = :id
                          and m.location in (0,:position)";
            $params = array(0 => array('name' => ':id', 'value' => $id, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1),
                    1 => array('name' => ':position', 'value' => $position, 'type' => PDO::PARAM_INT|PDO::PARAM_INPUT_OUTPUT, 'size' => -1));
            
            return $db->execStatement($query, $params);      
        }
        
}


?>