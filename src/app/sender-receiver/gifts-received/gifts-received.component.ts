import { Component, OnInit } from '@angular/core';
import { MatTableColumns } from 'src/app/common/MatTableColumns';
import { UserGiftCardMapping } from 'src/app/models/user-giftcard-mapping.model';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { UserPoints } from 'src/app/models/user-points.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';

@Component({
  selector: 'app-gifts-received',
  templateUrl: './gifts-received.component.html',
  styleUrls: ['./gifts-received.component.css']
})
export class GiftsReceivedComponent implements OnInit {

  // ColumnDef, HeaderCellDef
  matTableColumns: MatTableColumns[] = [
    new MatTableColumns('receiver', 'Sent to'),
    new MatTableColumns('giftCardName', 'Gift Card Name'),
    new MatTableColumns('giftCardId', 'GiftCard Number'),
    new MatTableColumns('points', 'Points'),
    new MatTableColumns('createdDate', 'Created Date'),
    new MatTableColumns('actions', 'Actions'),
  ];

  displayedColumns: string[] = ['receiver', 'giftCardName', 'giftCardId', 'points', 'createdDate', 'actions'];

  allUsersGiftOrders: UserGiftCardMapping[];
  userReceivedGiftOrders: UserGiftCardMapping[];
  userPointsArray: UserPoints[];
  userPoints: UserPoints;


  constructor(private fbService: FirebaseService,
    private authService: AuthService,
    private tostr: ToastrService ,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.fbService.getAllUserGiftCardFromFirebase().subscribe(list => {
      this.allUsersGiftOrders = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.userReceivedGiftOrders = this.allUsersGiftOrders.filter(order => order.receiver === this.authService.user.email);
    });

    this.fbService.getUsersPointsFromFirebase().subscribe(list => {
      this.userPointsArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.userPoints = this.userPointsArray.find(user => user.userEmail === this.authService.user.email);
    });

  }

  onCardRedeem(input) {
    this.openDialog(input);
    // console.log('in gift recieved component', input);
    // this.userPoints.points = this.userPoints.points - input.points;
    // this.fbService.updateUserPointsToFirebase(this.userPoints);
    // this.tostr.success('Redeemed Successfully');
  }

  openDialog(giftData): void {
    const dialogRef = this.dialog.open(FeedbackFormComponent, {
      data: {
        height: '700px',
        width: '300px',
        bookData: giftData
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
