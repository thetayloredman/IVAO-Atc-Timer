
  <section id="mu-from-blog" style="background-color: #e6e6e6;">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-sm-12 col-md-6">
            <div class="mu-title">
              <h2>Top 5 Controllers</h2>
            </div>
            <div class="row" style="margin-right:5px;">    
            <p><?php 
        $previousmonth = strtotime("first day of previous month 00:00");
        $req = $db->query("SELECT vid,SEC_TO_TIME(SUM( TIME_TO_SEC(total_time))) FROM logbook WHERE (date BETWEEN ".date('\'Y-m-d H:i:s\'', $previousmonth)." AND ".date('\'Y-m-d H:i:s\'', strtotime("last day of previous month 23:59:59")).") GROUP BY vid ORDER BY SEC_TO_TIME(SUM( TIME_TO_SEC(total_time))) DESC")->fetchAll(PDO::FETCH_NUM);
        ?>
			<table style="width:100%;">
			<caption style="text-align: center;"><?= date('F Y', $previousmonth); ?></caption>
			  <tr>
				<th scope="col" style="text-align: center;">Position</th>
				<th scope="col" style="text-align: center;">VID</th>
				<th scope="col" style="text-align: center;">Total Hours</th>
			  </tr>
                  <?php
                  $i = 1;
                  foreach ($req as $value){
                     echo '<tr><td style="text-align: center;">'.$i.'</td>';
				     echo '<td style="text-align: center;"><a href="https://www.ivao.aero/Member.aspx?Id='.$value[0].'" target="_blank">'.$value[0].'</a></td>';
				     echo '<td style="text-align: center;">'.$value[1].'</td></tr>';
                      if (++$i == 6) break;
                  }
              
              ?>
          </table>
          </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="mu-title">
              <h2>Top 5 Facilities</h2>
            </div>
            <div class="row" style="margin-left:5px;">
            <p><?php 
        $previousmonth = strtotime("first day of previous month 00:00");
        $req = $db->query("SELECT position,SEC_TO_TIME(SUM( TIME_TO_SEC(total_time))) FROM logbook WHERE (date BETWEEN ".date('\'Y-m-d H:i:s\'', $previousmonth)." AND ".date('\'Y-m-d H:i:s\'', strtotime("last day of previous month 23:59:59")).") GROUP BY position ORDER BY SEC_TO_TIME(SUM( TIME_TO_SEC(total_time))) DESC")->fetchAll(PDO::FETCH_NUM);
        ?>
			<table style="width:100%;">
			<caption style="text-align: center;"><?= date('F Y', $previousmonth); ?></caption>
			  <tr>
				<th scope="col" style="text-align: center;">Position</th>
				<th scope="col" style="text-align: center;">Total Hours</th>
			  </tr>
                  <?php
                  $i = 1;
                  foreach ($req as $value){
                     echo '<tr><td style="text-align: center;">'.$value[0].'</td>';
				     echo '<td style="text-align: center;">'.$value[1].'</td></tr>';
                      if (++$i == 6) break;
                  }
              
              ?>
          </table>
          </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>